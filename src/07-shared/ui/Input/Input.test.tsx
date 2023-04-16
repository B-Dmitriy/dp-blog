import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input test', () => {
    it('should be render', () => {
        const onChange = jest.fn();
        render(<Input
            value="test_value"
            onChange={onChange}
        />);

        const input = screen.getByTestId('text_input_id');

        expect(input).toBeInTheDocument();

        const testEnter = { target: { value: '1' } };
        const testEnter2 = { target: { value: '12' } };

        fireEvent.change(input, testEnter);
        fireEvent.change(input, testEnter2);

        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('should be render with icon', () => {
        render(<Input
            label="test_label"
            value="test_value"
            modification="icon"
        />);

        expect(screen.getByTestId('text_input_id')).toBeInTheDocument();
    });

    it('should be render with secret', () => {
        render(<Input
            label="test_label"
            value="test_value"
            modification="secret"
        />);

        const input = screen.getByTestId('text_input_id');
        const icon = screen.getByTestId('test_svg_icon_id');

        expect(input).toHaveAttribute('type', 'password');

        fireEvent(icon, new MouseEvent('click', {
            bubbles: true,
        }));

        expect(input).toHaveAttribute('type', 'text');
    });

    it('should be render with cleaner', () => {
        const onChange = jest.fn();
        const onChangeValue = jest.fn();
        render(<Input
            label="test_label"
            value="test_value"
            modification="cleaner"
            onChange={onChange}
            onChangeValue={onChangeValue}
        />);

        const icon = screen.getByTestId('test_svg_icon_id');

        fireEvent(icon, new MouseEvent('click', {
            bubbles: true,
        }));

        expect(onChange).toBeCalledTimes(1);
        expect(onChangeValue).toBeCalledTimes(1);
        expect(onChangeValue).toHaveBeenCalledWith('');
    });

    it('should be render with counter', () => {
        render(<Input
            label="test_label"
            value="test_value"
            modification="counter"
            maxLength={25}
        />);

        expect(screen.getByTestId('input_counter')).toHaveTextContent('0/25');
        expect(screen.getByTestId('text_input_id')).toBeInTheDocument();
    });

    it('should be render with error', () => {
        render(<Input
            label="test_label"
            value="test_value"
            error="error"
        />);

        expect(screen.getByTestId('input_error_block')).toBeInTheDocument();
    });

    it('should be called onChangeValue', () => {
        const onChangeValue = jest.fn();
        render(<Input
            label="test_label"
            value="test_value"
            onChangeValue={onChangeValue}
        />);

        const input = screen.getByTestId('text_input_id');

        expect(input).toBeInTheDocument();

        const testEnter = { target: { value: '1' } };
        const testEnter2 = { target: { value: '12' } };

        fireEvent.change(input, testEnter);
        fireEvent.change(input, testEnter2);

        expect(onChangeValue).toHaveBeenCalledTimes(2);
        expect(onChangeValue).toHaveBeenNthCalledWith(1, '1');
        expect(onChangeValue).toHaveBeenNthCalledWith(2, '12');
    });
});
