import type { ElementType, HTMLAttributes, CSSProperties } from "react";

export interface StackProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    gap?: CSSProperties["gap"];
    align?: "start" | "end" | "center" | "stretch";
    inline?: boolean;
}