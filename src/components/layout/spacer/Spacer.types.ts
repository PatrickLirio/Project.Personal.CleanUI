import type { HTMLAttributes, CSSProperties } from "react";

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
    size?: CSSProperties["width"];  // explicit size, e.g. "var(--space-4)" or "16px"
    axis?: "horizontal" | "vertical";
}