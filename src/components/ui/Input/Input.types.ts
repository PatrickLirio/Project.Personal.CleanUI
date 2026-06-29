import type { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: InputSize;
    leftAddon?: ReactNode;
    rightAddon?: ReactNode;
    isFullWidth?: boolean;
}