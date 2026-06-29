import { createContext, useContext } from "react";
import type { UseFormReturn, FormRules } from "@/hooks/useForm";

export interface FormContextValue extends UseFormReturn {
    rules: FormRules;
}

export const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext(): FormContextValue {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a Form component");
    }
    return context;
}