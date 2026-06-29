import { useEffect } from "react";

export function useScrollLock(isActive: boolean) {
    useEffect(() => {
        if (!isActive) return;

        const originalOverflow = document.body.style.overflow;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Prevent layout shift when scrollbar disappears
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = "0px";
        };
    }, [isActive]);
}