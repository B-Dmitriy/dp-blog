import { render, screen } from '@testing-library/react';
import { Button } from '07-shared/ui/Button/Button';

describe('Button', () => {
    test('Button is render without view prop', () => {
        render(<Button>Title</Button>);

        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByTestId('button_test_id')).toHaveClass('primary');
    });

    test('Button is render with size="small"', () => {
        render(<Button size="small">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('small');
    });

    test('Button is render with size="large"', () => {
        render(<Button size="large">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('large');
    });

    test('Button is render with view="primary"', () => {
        render(<Button view="primary">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('primary');
    });

    test('Button is render with view="secondary"', () => {
        render(<Button view="secondary">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('secondary');
    });

    test('Button is render with view="outline"', () => {
        render(<Button view="outline">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('outline');
    });

    test('Button is render with view="clear"', () => {
        render(<Button view="clear">Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('clear');
    });

    test('Button is render with disabled', () => {
        render(<Button disabled>Title</Button>);

        expect(screen.getByTestId('button_test_id')).toHaveClass('disabled');
    });
});
