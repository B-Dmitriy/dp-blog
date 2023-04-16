import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    test('Loader is render', () => {
        render(<Loader />);

        expect(screen.getByTestId('loader_test_id')).toBeInTheDocument();
    });
});
