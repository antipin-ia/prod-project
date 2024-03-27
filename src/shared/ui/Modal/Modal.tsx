import { classNames } from 'shared/lib/classNames/classNames';
import { useSSR, useTranslation } from 'react-i18next';
import React, {
    ReactNode, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY: number = 300;

export const Modal = (props: ModalProps) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef < ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen && onClose) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onClose]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    return (
        // <Portal>
        <div className={classNames(styles.Modal, mods, [className])}>
            <div
                className={styles.overlay}
                onClick={closeHandler}
                role="dialog"
                tabIndex={-1}
            >
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
        // </Portal>
    );
};
