import type { BoxProps } from "./Box.types";

export function Box({
    children,
    className,
    ...props
}: BoxProps) {
    return (
        <div
            className={className}
            {...props}
        >
            {children}
        </div>
    );
}