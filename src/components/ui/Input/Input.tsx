import { useId } from "react";
import { clsx } from "clsx";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

export function Input({
    label,
    helperText,
    errorText,
    size = "md",
    leftAddon,
    rightAddon,
    isFullWidth = false,
    className,
    disabled,
    id: externalId,
    ...props
}: InputProps) {
    const generatedId = useId();
    const id = externalId ?? generatedId;
    const descriptionId = `${id}-description`;

    const hasError = Boolean(errorText);
    const hasDescription = Boolean(errorText ?? helperText);

    return (
        <div
            className={clsx(
                styles.wrapper,
                isFullWidth && styles.fullWidth
            )}
        >
            {label && (
                <label
                    htmlFor={id}
                    className={clsx(
                        styles.label,
                        disabled && styles.labelDisabled
                    )}
                >
                    {label}
                </label>
            )}

            <div className={clsx(styles.inputWrapper, styles[size])}>
                {leftAddon && (
                    <span className={styles.addon} aria-hidden="true">
                        {leftAddon}
                    </span>
                )}

                <input
                    id={id}
                    className={clsx(
                        styles.input,
                        hasError && styles.inputError,
                        leftAddon && styles.hasLeftAddon,
                        rightAddon && styles.hasRightAddon,
                        className
                    )}
                    disabled={disabled}
                    aria-invalid={hasError}
                    aria-describedby={hasDescription ? descriptionId : undefined}
                    {...props}
                />

                {rightAddon && (
                    <span className={styles.addon} aria-hidden="true">
                        {rightAddon}
                    </span>
                )}
            </div>

            {hasDescription && (
                <span
                    id={descriptionId}
                    className={clsx(
                        styles.description,
                        hasError ? styles.descriptionError : styles.descriptionHelper
                    )}
                >
                    {errorText ?? helperText}
                </span>
            )}
        </div>
    );
}