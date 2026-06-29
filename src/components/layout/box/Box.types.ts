import type { ElementType, HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;  // allows <Box as="section"> or <Box as="article">
}