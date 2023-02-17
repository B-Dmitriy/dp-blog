import { Button } from '07-shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Button is render', () => {
        render(<Button theme="primary">Title</Button>);

        expect(screen.getByText('Title')).toBeInTheDocument();
    });
});
