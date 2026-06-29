// hooks/useDropdownPosition.ts
import { useState, useCallback, type RefObject } from "react";
import type { DropdownPlacement } from "@/components/composite/Dropdown/Dropdown.types";

interface Position {
    top: number;
    left: number;
    width: number;
}

export function useDropdownPosition(
    triggerRef: RefObject<HTMLElement | null>,
    placement: DropdownPlacement = "bottom-start"
) {
    const [position, setPosition] = useState<Position>({ top: 0, left: 0, width: 0 });

    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const positions: Record<DropdownPlacement, Position> = {
            "bottom-start": {
                top: rect.bottom + scrollY + 4,
                left: rect.left + scrollX,
                width: rect.width,
            },
            "bottom-end": {
                top: rect.bottom + scrollY + 4,
                left: rect.right + scrollX - rect.width,
                width: rect.width,
            },
            "top-start": {
                top: rect.top + scrollY - 4,
                left: rect.left + scrollX,
                width: rect.width,
            },
            "top-end": {
                top: rect.top + scrollY - 4,
                left: rect.right + scrollX - rect.width,
                width: rect.width,
            },
        };

        setPosition(positions[placement]);
    }, [triggerRef, placement]);

    return { position, updatePosition };
}