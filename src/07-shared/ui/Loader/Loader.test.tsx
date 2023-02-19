import { Loader } from '07-shared/ui/Loader/Loader';
import { render, screen } from '@testing-library/react';

describe('Loader', () => {
    test('Loader is render', () => {
        render(<Loader />);

        expect(screen.getByTestId('loader_test_id')).toBeInTheDocument();
    });
});
