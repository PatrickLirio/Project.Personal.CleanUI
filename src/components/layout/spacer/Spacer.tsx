import styles from "./Spacer.module.css";
import { clsx } from "clsx";
import type { SpacerProps } from "./Spacer.Types";

export function Spacer({
    size,
    axis = "horizontal",
    className,
    style,
    ...props
}: SpacerProps) {
    const isHorizontal = axis === "horizontal";

    return (
        <span
            className={clsx(
                styles.spacer,
                isHorizontal ? styles.horizontal : styles.vertical,
                className
            )}
            style={{
                width:  isHorizontal ? (size ?? undefined) : undefined,
                height: !isHorizontal ? (size ?? undefined) : undefined,
                ...style,
            }}
            {...props}
        />
    );
}