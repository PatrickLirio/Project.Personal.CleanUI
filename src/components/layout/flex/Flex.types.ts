
import type { ElementType, HTMLAttributes, CSSProperties } from "react";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexAlign = "start" | "end" | "center" | "stretch" | "baseline";
export type FlexJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    wrap?: FlexWrap;
    gap?: CSSProperties["gap"];
    inline?: boolean;
}