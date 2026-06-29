import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
    isStriped?: boolean;
    isBordered?: boolean;
    isHoverable?: boolean;
    stickyHeader?: boolean;
}

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>
export type TableHeaderProps = ThHTMLAttributes<HTMLTableCellElement>
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>