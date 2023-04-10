import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

const options = ['item1', 'item2', 'item3'];

describe('Select tests', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should be render', () => {
        render(<Select
            value="item1"
            options={options}
            className="test_classname"
        />);

        const select = screen.getByTestId('select_wrapper');
        const title = screen.getByTestId('select_button');
        const arrowIcon = screen.getByTestId('test_svg_icon_id');

        expect(select).toBeInTheDocument();
        expect(arrowIcon).toBeInTheDocument();
        expect(select).toHaveClass('test_classname');
        expect(title).toHaveTextContent('item1');
    });
    it('should be render readOnly', () => {
        render(<Select
            readOnly
            value="item1"
            options={options}
            className="test_classname"
            error="error"
        />);

        const label = screen.getByTestId('select_label');
        const valueBtn = screen.getByTestId('select_button');
        const errorBlock = screen.queryByTestId('select_error');

        expect(label).toHaveClass('topLabel');
        expect(valueBtn).not.toHaveClass('open');
        expect(valueBtn).toHaveClass('readOnly');
        expect(errorBlock).not.toBeInTheDocument();
    });
    it('should be render with error', () => {
        render(<Select
            value="item1"
            options={options}
            className="test_classname"
            error="error"
        />);

        const label = screen.getByTestId('select_label');
        const valueBtn = screen.getByTestId('select_button');
        const errorBlock = screen.queryByTestId('select_error');

        expect(label).toHaveClass('topLabel');
        expect(valueBtn).toHaveClass('errorValue');
        expect(valueBtn).not.toHaveClass('open');
        expect(errorBlock).toBeInTheDocument();
        expect(errorBlock).toHaveTextContent('error');
        expect(errorBlock).toHaveClass('topLabel');
    });
    it('should be render with left label', () => {
        render(<Select
            label="test_label"
            labelPosition="left"
            value="item1"
            options={options}
            className="test_classname"
            error="error"
        />);

        const label = screen.getByTestId('select_label');
        const errorBlock = screen.queryByTestId('select_error');

        expect(label).not.toHaveClass('topLabel');
        expect(errorBlock).not.toHaveClass('topLabel');
    });

    it('should be render with left label', () => {
        render(<Select
            label="test_label"
            labelPosition="left"
            value="item1"
            options={options}
            className="test_classname"
            error="error"
        />);

        const label = screen.getByTestId('select_label');
        const errorBlock = screen.queryByTestId('select_error');

        expect(label).not.toHaveClass('topLabel');
        expect(errorBlock).not.toHaveClass('topLabel');
    });
    it('should be render and select new item', () => {
        const onSelect = jest.fn();

        render(<Select
            label="test_label"
            labelPosition="left"
            value="item1"
            options={options}
            className="test_classname"
            error="error"
            onSelect={onSelect}
        />);

        const valueBtn = screen.getByTestId('select_button');
        const list = screen.getByTestId('select_list');

        expect(list).not.toHaveClass('open');

        fireEvent.click(valueBtn);

        expect(list).toHaveClass('open');

        const items = screen.getAllByTestId('select_item');

        fireEvent.click(items[1]);

        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(onSelect).toHaveBeenCalledWith('item2');
    });
    it('should be close with outside click', () => {
        const onSelect = jest.fn();

        render(
            <div>
                <span
                    data-testid="test_outside_element"
                >
                    Test element
                </span>
                <Select
                    label="test_label"
                    labelPosition="left"
                    value="item1"
                    options={options}
                    className="test_classname"
                    error="error"
                    onSelect={onSelect}
                />
            </div>,
        );

        const outsideElem = screen.getByTestId('test_outside_element');
        const valueBtn = screen.getByTestId('select_button');
        const list = screen.getByTestId('select_list');

        expect(list).not.toHaveClass('open');

        fireEvent.click(valueBtn);

        expect(list).toHaveClass('open');

        fireEvent.click(outsideElem);

        expect(list).not.toHaveClass('open');
        expect(onSelect).toHaveBeenCalledTimes(0);
    });
});
