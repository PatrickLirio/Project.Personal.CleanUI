import { clsx } from "clsx";
import styles from "./Flex.module.css";
import type { FlexProps } from "./Flex.types";

const justifyMap: Record<string, string> = {
    start:   "flex-start",
    end:     "flex-end",
    center:  "center",
    between: "space-between",
    around:  "space-around",
    evenly:  "space-evenly",
};

const alignMap: Record<string, string> = {
    start:    "flex-start",
    end:      "flex-end",
    center:   "center",
    stretch:  "stretch",
    baseline: "baseline",
};

export function Flex({
    as: Component = "div",
    direction,
    align,
    justify,
    wrap,
    gap,
    inline = false,
    className,
    style,
    children,
    ...props
}: FlexProps) {
    return (
        <Component
            className={clsx(styles.flex, inline && styles.inline, className)}
            style={{
                flexDirection: direction,
                alignItems: align ? alignMap[align] : undefined,
                justifyContent: justify ? justifyMap[justify] : undefined,
                flexWrap: wrap,
                gap,
                ...style,
            }}
            {...props}
        >
            {children}
        </Component>
    );
}