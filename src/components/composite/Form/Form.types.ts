import type { FormHTMLAttributes, ReactNode } from "react";
import type { FormValues, FormRules } from "@/hooks/useForm";
import type { InputProps } from "@/components/ui/Input/Input.types";

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    initialValues: FormValues;
    rules?: FormRules;
    onSubmit: (values: FormValues) => Promise<void> | void;
    children: ReactNode;
}

export interface FormFieldProps extends Omit<InputProps, "value" | "onChange" | "onBlur" | "errorText"> {
    name: string;
}