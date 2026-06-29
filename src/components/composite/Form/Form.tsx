import { clsx } from "clsx";
import { useForm } from "@/hooks/useForm";
import { FormContext, useFormContext } from "@/contexts/form/FormContext";
import { Input } from "@/components/ui/Input";
import type { FormProps, FormFieldProps } from "./Form.types";
import styles from "./Form.module.css";

export function Form({
    initialValues,
    rules = {},
    onSubmit,
    className,
    children,
    ...props
}: FormProps) {
    const form = useForm(initialValues, rules);

    return (
        <FormContext.Provider value={{ ...form, rules }}>
            <form
                className={clsx(styles.form, className)}
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit(onSubmit);
                }}
                noValidate
                {...props}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
}

export function FormField({
    name,
    ...inputProps
}: FormFieldProps) {
    const { values, errors, touched, handleChange, handleBlur } = useFormContext();

    return (
        <Input
            {...inputProps}
            name={name}
            value={values[name] ?? ""}
            errorText={touched[name] && errors[name] ? errors[name]! : undefined}
            onChange={(e) => handleChange(name, e.target.value)}
            onBlur={() => handleBlur(name)}
        />
    );
}