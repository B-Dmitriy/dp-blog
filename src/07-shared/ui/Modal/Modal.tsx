import {
    memo, MouseEvent, MutableRefObject, PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { Portal } from '07-shared/lib/components/Portal/Portal';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useTheme } from '07-shared/lib/components/ThemeProvider';
import classes from './Modal.module.scss';

interface ModelProps {
    isOpen: boolean;
    isLazy?: boolean;
    onClose?: () => void;
    className?: string;
}

export const Modal = memo(({
    children,
    isOpen,
    onClose,
    isLazy = false,
    className,
}: PropsWithChildren<ModelProps>) => {
    const ANIMATION_DELAY = 150; // Must be shorts then transition time (250)

    const { theme } = useTheme();
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const onContentClick = (e: MouseEvent) => e.stopPropagation();

    const closeHandler = () => {
        setIsClosing(true);
        if (onClose) {
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    };

    const onEscapePress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onEscapePress);

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onEscapePress);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (isLazy && !isMounted) return null;

    return (
        <Portal>
            <div
                data-testid="modal_root_id"
                className={classNames(classes.Modal, {
                    [classes.opened]: isOpen,
                    [classes.closing]: isClosing,
                }, [className, theme])}
            >
                <div
                    data-testid="modal_overlay_id"
                    className={classes.overlay}
                    onMouseDown={closeHandler}
                >
                    <div
                        data-testid="modal_content_id"
                        className={classes.content}
                        onMouseDown={onContentClick}
                    >
                        {isOpen ? children : null}
                    </div>
                </div>
            </div>
        </Portal>
    );
});
