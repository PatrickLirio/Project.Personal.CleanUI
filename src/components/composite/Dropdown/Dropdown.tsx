
import { useState, useRef, useId, useCallback } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useDropdownPosition } from "@/hooks/useDropdownPosition";
import type { DropdownProps } from "./Dropdown.types";
import styles from "./Dropdown.module.css";

export function Dropdown({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    placement = "bottom-start",
    isDisabled = false,
    isFullWidth = false,
    label,
    errorText,
    helperText,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const triggerId = useId();
    const listboxId = useId();
    const descriptionId = useId();

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const { position, updatePosition } = useDropdownPosition(triggerRef, placement);

    const selectedOption = options.find((opt) => opt.value === value);
    const hasError = Boolean(errorText);
    const hasDescription = Boolean(errorText ?? helperText);

    const open = useCallback(() => {
        if (isDisabled) return;
        updatePosition();
        setIsOpen(true);
        setFocusedIndex(
            value ? options.findIndex((opt) => opt.value === value) : 0
        );
    }, [isDisabled, updatePosition, value, options]);

    const close = useCallback(() => {
        setIsOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
    }, []);

    const select = useCallback((optionValue: string) => {
        onChange(optionValue);
        close();
    }, [onChange, close]);

    useOutsideClick(containerRef, close, isOpen);

    function handleTriggerKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
        case "Enter":
        case " ":
            e.preventDefault();
            if (isOpen) {
                close();
            } else {
                open();
            }
            break;
        case "ArrowDown":
            e.preventDefault();
            if (!isOpen) open();
            break;
        case "Escape":
            if (isOpen) close();
            break;
    }
}

    function handleListKeyDown(e: React.KeyboardEvent) {
        // const enabledOptions = options.filter((opt) => !opt.disabled);

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setFocusedIndex((prev) =>
                    prev < options.length - 1 ? prev + 1 : 0
                );
                break;
            case "ArrowUp":
                e.preventDefault();
                setFocusedIndex((prev) =>
                    prev > 0 ? prev - 1 : options.length - 1
                );
                break;
            case "Home":
                e.preventDefault();
                setFocusedIndex(0);
                break;
            case "End":
                e.preventDefault();
                setFocusedIndex(options.length - 1);
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                if (focusedIndex >= 0 && !options[focusedIndex].disabled) {
                    select(options[focusedIndex].value);
                }
                break;
            case "Escape":
                close();
                break;
            case "Tab":
                close();
                break;
        }
    }

    return (
        <div
            ref={containerRef}
            className={clsx(
                styles.wrapper,
                isFullWidth && styles.fullWidth
            )}
        >
            {label && (
                <label
                    htmlFor={triggerId}
                    className={clsx(
                        styles.label,
                        isDisabled && styles.labelDisabled
                    )}
                >
                    {label}
                </label>
            )}

            <button
                ref={triggerRef}
                id={triggerId}
                type="button"
                className={clsx(
                    styles.trigger,
                    isOpen && styles.triggerOpen,
                    hasError && styles.triggerError,
                    isDisabled && styles.triggerDisabled
                )}
                disabled={isDisabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={isOpen ? listboxId : undefined}
                aria-describedby={hasDescription ? descriptionId : undefined}
                onKeyDown={handleTriggerKeyDown}
                onClick={() => isOpen ? close() : open()}
            >
                <span className={clsx(
                    styles.triggerLabel,
                    !selectedOption && styles.placeholder
                )}>
                    {selectedOption ? (
                        <>
                            {selectedOption.icon && (
                                <span className={styles.optionIcon} aria-hidden="true">
                                    {selectedOption.icon}
                                </span>
                            )}
                            {selectedOption.label}
                        </>
                    ) : placeholder}
                </span>
                <span
                    className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
                    aria-hidden="true"
                >
                    ▾
                </span>
            </button>

            {hasDescription && (
                <span
                    id={descriptionId}
                    className={clsx(
                        styles.description,
                        hasError
                            ? styles.descriptionError
                            : styles.descriptionHelper
                    )}
                >
                    {errorText ?? helperText}
                </span>
            )}

            {isOpen && createPortal(
                <ul
                    id={listboxId}
                    role="listbox"
                    aria-label={label}
                    className={styles.listbox}
                    style={{
                        top: position.top,
                        left: position.left,
                        width: position.width,
                    }}
                    onKeyDown={handleListKeyDown}
                    tabIndex={-1}
                >
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={option.value === value}
                            aria-disabled={option.disabled}
                            className={clsx(
                                styles.option,
                                option.value === value && styles.optionSelected,
                                index === focusedIndex && styles.optionFocused,
                                option.disabled && styles.optionDisabled
                            )}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                if (!option.disabled) select(option.value);
                            }}
                            onMouseEnter={() => setFocusedIndex(index)}
                        >
                            {option.icon && (
                                <span className={styles.optionIcon} aria-hidden="true">
                                    {option.icon}
                                </span>
                            )}
                            {option.label}
                            {option.value === value && (
                                <span className={styles.checkmark} aria-hidden="true">
                                    ✓
                                </span>
                            )}
                        </li>
                    ))}
                </ul>,
                document.body
            )}
        </div>
    );
}