import { clsx } from "clsx";
import styles from "./Stack.module.css";
import type { StackProps } from "./Stack.types";

export function Stack({
    as: Component = "div",
    gap = "var(--space-4)",
    align,
    inline = false,
    className,
    style,
    children,
    ...props
}: StackProps) {
    return (
        <Component
            className={clsx(styles.stack, inline && styles.inline, className)}
            style={{
                gap,
                alignItems: align,
                ...style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
}