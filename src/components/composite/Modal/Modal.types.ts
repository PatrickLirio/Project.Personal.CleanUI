import type { HTMLAttributes, ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: ModalSize;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    children: ReactNode;
    ariaLabel?: string;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>
export type ModalFooterProps = HTMLAttributes<HTMLDivElement>