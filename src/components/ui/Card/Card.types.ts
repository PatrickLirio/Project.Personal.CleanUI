import type { HTMLAttributes } from "react";

export type CardVariant = "elevated" | "outlined" | "filled";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    isInteractive?: boolean;
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>
export type CardBodyProps = HTMLAttributes<HTMLDivElement>
export type CardFooterProps = HTMLAttributes<HTMLDivElement>