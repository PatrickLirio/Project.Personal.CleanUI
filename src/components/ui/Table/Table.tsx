import { clsx } from "clsx";
import type {
    TableProps,
    TableHeadProps,
    TableBodyProps,
    TableRowProps,
    TableHeaderProps,
    TableCellProps,
} from "./Table.types";
import styles from "./Table.module.css";

export function Table({
    isStriped = false,
    isBordered = false,
    isHoverable = false,
    stickyHeader = false,
    className,
    children,
    ...props
}: TableProps) {
    return (
        <div className={styles.tableContainer}>
            <table
                className={clsx(
                    styles.table,
                    isStriped && styles.striped,
                    isBordered && styles.bordered,
                    isHoverable && styles.hoverable,
                    stickyHeader && styles.stickyHeader,
                    className
                )}
                {...props}
            >
                {children}
            </table>
        </div>
    );
}

export function TableHead({ className, children, ...props }: TableHeadProps) {
    return (
        <thead className={clsx(styles.thead, className)} {...props}>
            {children}
        </thead>
    );
}

export function TableBody({ className, children, ...props }: TableBodyProps) {
    return (
        <tbody className={clsx(styles.tbody, className)} {...props}>
            {children}
        </tbody>
    );
}

export function TableRow({ className, children, ...props }: TableRowProps) {
    return (
        <tr className={clsx(styles.row, className)} {...props}>
            {children}
        </tr>
    );
}

export function TableHeader({ className, children, ...props }: TableHeaderProps) {
    return (
        <th className={clsx(styles.th, className)} {...props}>
            {children}
        </th>
    );
}

export function TableCell({ className, children, ...props }: TableCellProps) {
    return (
        <td className={clsx(styles.td, className)} {...props}>
            {children}
        </td>
    );
}
