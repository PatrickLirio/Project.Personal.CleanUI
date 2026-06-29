import { ThemeProvider } from "../contexts/theme/ThemeProvider";

type Props = {
    children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}