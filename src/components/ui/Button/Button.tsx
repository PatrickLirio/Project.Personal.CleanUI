import { clsx } from "clsx";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export function Button({
    variant = "primary",
    size = "md",
    isLoading = false,
    isFullWidth = false,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                isFullWidth && styles.fullWidth,
                isLoading && styles.loading,
                className
            )}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-busy={isLoading}
            {...props}
        >
            {isLoading && (
                <span className={styles.spinner} aria-hidden="true" />
            )}
            {!isLoading && leftIcon && (
                <span className={styles.iconLeft} aria-hidden="true">
                    {leftIcon}
                </span>
            )}
            <span className={styles.label}>{children}</span>
            {!isLoading && rightIcon && (
                <span className={styles.iconRight} aria-hidden="true">
                    {rightIcon}
                </span>
            )}
        </button>
    );
}