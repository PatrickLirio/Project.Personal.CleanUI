import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTORS = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useFocusTrap(isActive: boolean) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isActive || !containerRef.current) return;

        const container = containerRef.current;

        // Store the element that was focused before modal opened
        const previouslyFocused = document.activeElement as HTMLElement;

        // Focus the container itself on open
        container.focus();

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key !== "Tab") return;

            const focusableElements = Array.from(
                container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
            );

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                // Shift+Tab — moving backwards
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab — moving forwards
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            // Restore focus to the element that opened the modal
            previouslyFocused?.focus();
        };
    }, [isActive]);

    return containerRef;
}