import { clsx } from "clsx";
import styles from "./Grid.module.css";
import type { GridProps } from "./Grid.Types";

function resolveColumns(columns: number | string | undefined): string | undefined {
    if (columns === undefined) return undefined;
    if (typeof columns === "number") return `repeat(${columns}, 1fr)`;
    return columns; // raw string like "200px 1fr" passes through unchanged
}

export function Grid({
    as: Component = "div",
    columns,
    gap,
    rowGap,
    columnGap,
    className,
    style,
    children,
    ...props
}: GridProps) {
    return (
        <Component
            className={clsx(styles.grid, className)}
            style={{
                gridTemplateColumns: resolveColumns(columns),
                gap,
                rowGap,
                columnGap,
                ...style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
}