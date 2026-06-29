import { useEffect, type RefObject } from "react";

export function useOutsideClick(
    ref: RefObject<HTMLElement | null>,
    handler: () => void,
    isActive: boolean
) {
    useEffect(() => {
        if (!isActive) return;

        function handleClick(event: MouseEvent) {
            if (!ref.current) return;
            if (ref.current.contains(event.target as Node)) return;
            handler();
        }

        // Use mousedown, not click
        // mousedown fires before the blur event on the trigger
        // preventing the race condition between close and reopen
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, handler, isActive]);
}