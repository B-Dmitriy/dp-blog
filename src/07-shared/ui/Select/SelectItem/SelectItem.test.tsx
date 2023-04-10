import { render, screen, fireEvent } from '@testing-library/react';
import { SelectItem } from './SelectItem';

describe('SelectItem tests', () => {
    const onSelect = jest.fn();
    const setIsClose = jest.fn();

    afterEach(() => {
        onSelect.mockClear();
        setIsClose.mockClear();
    });

    it('should be render and select', () => {
        render(<SelectItem
            isOpen
            item="item text"
            onSelect={onSelect}
            setIsClose={setIsClose}
            className="test_classname"
        />);

        const selectItem = screen.getByTestId('select_item');

        expect(selectItem).toBeInTheDocument();
        expect(selectItem).toHaveClass('test_classname');

        fireEvent.click(selectItem);

        expect(onSelect).toBeCalledTimes(1);
        expect(setIsClose).toBeCalledTimes(1);
    });

    it('should be render disabled', () => {
        render(<SelectItem
            isOpen={false}
            item="item text"
            onSelect={onSelect}
            setIsClose={setIsClose}
        />);

        const selectItem = screen.getByTestId('select_item');

        expect(selectItem).toBeInTheDocument();
        expect(selectItem).toHaveAttribute('disabled');

        fireEvent.click(selectItem);

        expect(onSelect).toBeCalledTimes(0);
        expect(setIsClose).toBeCalledTimes(0);
    });
    it('should be render without onSelect', () => {
        render(<SelectItem
            isOpen
            item="item text"
            setIsClose={setIsClose}
        />);

        const selectItem = screen.getByTestId('select_item');

        expect(selectItem).toBeInTheDocument();

        fireEvent.click(selectItem);

        expect(onSelect).toBeCalledTimes(0);
        expect(setIsClose).toBeCalledTimes(1);
    });
});
