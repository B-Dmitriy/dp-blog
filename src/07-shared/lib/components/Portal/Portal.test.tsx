import { render } from '@testing-library/react';
import { Portal } from './Portal';

describe('Modal', () => {
    test('must be render', () => {
        const container = document.createElement('div');
        render(<Portal container={container}>Content</Portal>);

        expect(container).toHaveTextContent('Content');
    });

    test('must be render without container', () => {
        render(<Portal>Content</Portal>);

        expect(document.body).toHaveTextContent('Content');
    });
});
