import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

let timeoutID: ReturnType<typeof setTimeout>;

beforeEach(() => {
    clearTimeout(timeoutID);
});

describe('Modal', () => {
    test('must be render', () => {
        render(<Modal isOpen>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');
    });

    test('must be close after on overlay click', () => {
        const onClose = jest.fn();
        render(<Modal isOpen onClose={onClose}>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');

        fireEvent.click(screen.getByTestId('modal_overlay_id'));

        timeoutID = setTimeout(() => {
            expect(onClose).toBeCalledTimes(1);
        }, 300);
    });

    test('must be close after Escape press', () => {
        const onClose = jest.fn();
        render(<Modal isOpen onClose={onClose}>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');
        expect(screen.getByTestId('modal_root_id')).not.toHaveClass('closing');

        fireEvent.keyPress(window, { key: 'Escape' });

        timeoutID = setTimeout(() => {
            expect(screen.getByTestId('modal_root_id')).toHaveClass('closing');
            expect(onClose).toBeCalledTimes(1);
        }, 300);
    });

    test('must be opened after Enter press', () => {
        const onClose = jest.fn();
        render(<Modal isOpen onClose={onClose}>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');

        fireEvent.keyPress(window, { key: 'Enter' });

        timeoutID = setTimeout(() => {
            expect(onClose).toBeCalledTimes(0);
            expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');
        }, 300);
    });

    test('must be open after Escape press without onClose', () => {
        render(<Modal isOpen>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');

        fireEvent.keyPress(window, { key: 'Escape' });

        timeoutID = setTimeout(() => {
            expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');
        }, 300);
    });

    test('must be open after click on content', () => {
        const onClose = jest.fn();
        render(<Modal isOpen onClose={onClose}>Content</Modal>);

        expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');

        fireEvent.click(screen.getByTestId('modal_content_id'));

        timeoutID = setTimeout(() => {
            expect(screen.getByTestId('modal_root_id')).toHaveClass('opened');
        }, 300);
    });
});
