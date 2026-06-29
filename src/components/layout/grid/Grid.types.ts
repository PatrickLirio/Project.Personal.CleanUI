import type { ElementType, HTMLAttributes, CSSProperties } from "react";

export interface GridProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    columns?: number | string;  // 3 becomes "repeat(3, 1fr)", string passes through
    gap?: CSSProperties["gap"];
    rowGap?: CSSProperties["rowGap"];
    columnGap?: CSSProperties["columnGap"];
}