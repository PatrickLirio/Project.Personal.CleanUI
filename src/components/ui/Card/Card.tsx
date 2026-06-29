import { clsx } from "clsx";
import type {
    CardProps,
    CardHeaderProps,
    CardBodyProps,
    CardFooterProps,
} from "./Card.types";
import styles from "./Card.module.css";

export function Card({
    variant = "elevated",
    padding = "md",
    isInteractive = false,
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={clsx(
                styles.card,
                styles[variant],
                styles[`padding-${padding}`],
                isInteractive && styles.interactive,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <div className={clsx(styles.header, className)} {...props}>
            {children}
        </div>
    );
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
    return (
        <div className={clsx(styles.body, className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <div className={clsx(styles.footer, className)} {...props}>
            {children}
        </div>
    );
}