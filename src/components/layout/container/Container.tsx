import { clsx } from "clsx";
import styles from "./Container.module.css";
import type { ContainerProps } from "./Container.types";

export function Container({
    as: Component = "div",
    children,
    className,
    ...props
}: ContainerProps) {
    return (
        <Component
            className={clsx(styles.container, className)}
            {...props}
        >
            {children}
        </Component>
    );
}