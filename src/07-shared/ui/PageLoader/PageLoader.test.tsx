import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { render, screen } from '@testing-library/react';

describe('PageLoader', () => {
    test('PageLoader is render', () => {
        render(<PageLoader />);

        expect(screen.getByTestId('pageLoader_test_id')).toBeInTheDocument();
    });
});
