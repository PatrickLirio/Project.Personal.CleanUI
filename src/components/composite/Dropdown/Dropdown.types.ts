
import type { ReactNode } from "react";

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
}

export type DropdownPlacement =
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end";

export interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    placement?: DropdownPlacement;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    label?: string;
    errorText?: string;
    helperText?: string;
}