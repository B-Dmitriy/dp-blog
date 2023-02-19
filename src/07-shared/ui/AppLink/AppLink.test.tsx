import { withMemoryRouter } from '07-shared/lib/testsHelpers/withMemoryRouter';
import { render, screen } from '@testing-library/react';
import { AppLink } from './AppLink';

describe('AppLink', () => {
    test('AppLink render primary', () => {
        render(withMemoryRouter(
            <AppLink to="/about">
                Title
            </AppLink>,
            '/',
        ));

        const link = screen.getByTestId('appLink_test_id');
        expect(link).toBeInTheDocument();
        expect(link).toHaveClass('primary');
    });

    test('AppLink render secondary', () => {
        render(withMemoryRouter(
            <AppLink to="/about" view="secondary">
                Title
            </AppLink>,
            '/',
        ));

        const link = screen.getByTestId('appLink_test_id');
        expect(link).toBeInTheDocument();
        expect(link).toHaveClass('secondary');
    });

    test('AppLink render with icon', () => {
        render(withMemoryRouter(
            <AppLink to="/about" view="secondary" withIcon>
                Title
            </AppLink>,
            '/',
        ));

        expect(screen.getByTestId('appLink_test_id')).toHaveClass('secondary');
        expect(screen.getByTestId('test_svg_icon_id')).toBeInTheDocument();
    });
});
