import { useEffect } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useScrollLock } from "@/hooks/useScrollLock";
import type {
    ModalProps,
    ModalHeaderProps,
    ModalBodyProps,
    ModalFooterProps,
} from "./Modal.types";
import styles from "./Modal.module.css";

export function Modal({
    isOpen,
    onClose,
    size = "md",
    closeOnOverlayClick = true,
    closeOnEscape = true,
    children,
    ariaLabel,
}: ModalProps) {
    const focusRef = useFocusTrap(isOpen);
    useScrollLock(isOpen);

    // Escape key handler
    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, closeOnEscape, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={styles.overlay}
            onClick={closeOnOverlayClick ? onClose : undefined}
            aria-hidden="true"
        >
            <div
                ref={focusRef}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                tabIndex={-1}
                className={clsx(styles.dialog, styles[size])}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}

export function ModalHeader({
    onClose,
    className,
    children,
    ...props
}: ModalHeaderProps) {
    return (
        <div className={clsx(styles.header, className)} {...props}>
            <span className={styles.headerContent}>{children}</span>
            {onClose && (
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                    type="button"
                >
                    ✕
                </button>
            )}
        </div>
    );
}

export function ModalBody({ className, children, ...props }: ModalBodyProps) {
    return (
        <div className={clsx(styles.body, className)} {...props}>
            {children}
        </div>
    );
}

export function ModalFooter({ className, children, ...props }: ModalFooterProps) {
    return (
        <div className={clsx(styles.footer, className)} {...props}>
            {children}
        </div>
    );
}