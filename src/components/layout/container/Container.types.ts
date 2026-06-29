import type { ElementType, HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;  // allows <Container as="section"> or <Container as="article">
}