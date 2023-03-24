import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from '07-shared/ui/Switch/Switch';

describe('Switch', () => {
    test('Switch is render', () => {
        const changeIsActive = jest.fn();
        render(<Switch isActive changeIsActiveStatus={changeIsActive} />);

        expect(screen.getByTestId('switch__test_id')).toBeInTheDocument();
    });

    test('Switch is inactive', () => {
        const changeIsActive = jest.fn();
        render(<Switch isActive={false} changeIsActiveStatus={changeIsActive} />);

        const switchComponent = screen.getByTestId('switch__test_id');

        expect(switchComponent).toBeInTheDocument();
        expect(switchComponent).toHaveClass('inactive');
    });

    test('Switch is change value', () => {
        const changeIsActive = jest.fn();
        render(<Switch isActive changeIsActiveStatus={changeIsActive} />);

        const switchComponent = screen.getByTestId('switch__test_id');

        expect(switchComponent).toBeInTheDocument();
        expect(switchComponent).toHaveClass('active');

        fireEvent.click(switchComponent);

        expect(changeIsActive).toBeCalledTimes(1);
    });
});
