import { useState, useCallback } from "react";
import type { ValidationRule } from "@/utils/validation";

export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string | null>;
export type FormTouched = Record<string, boolean>;
export type FormRules = Record<string, ValidationRule>;

export interface UseFormReturn {
    values: FormValues;
    errors: FormErrors;
    touched: FormTouched;
    isSubmitting: boolean;
    isValid: boolean;
    handleChange: (name: string, value: string) => void;
    handleBlur: (name: string) => void;
    handleSubmit: (onSubmit: (values: FormValues) => Promise<void> | void) => void;
    setFieldError: (name: string, error: string | null) => void;
    reset: () => void;
}

export function useForm(
    initialValues: FormValues,
    rules: FormRules = {}
): UseFormReturn {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<FormTouched>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = useCallback(
        (name: string, value: string): string | null => {
            const rule = rules[name];
            if (!rule) return null;
            return rule(value);
        },
        [rules]
    );

    const validateAll = useCallback((): FormErrors => {
        const newErrors: FormErrors = {};
        for (const name in values) {
            newErrors[name] = validate(name, values[name]);
        }
        return newErrors;
    }, [values, validate]);

    const isValid = Object.values(errors).every((e) => e === null);

    const handleChange = useCallback(
        (name: string, value: string) => {
            setValues((prev) => ({ ...prev, [name]: value }));

            // Revalidate on change only if field has been touched
            if (touched[name]) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: validate(name, value),
                }));
            }
        },
        [touched, validate]
    );

    const handleBlur = useCallback(
        (name: string) => {
            setTouched((prev) => ({ ...prev, [name]: true }));
            setErrors((prev) => ({
                ...prev,
                [name]: validate(name, values[name]),
            }));
        },
        [values, validate]
    );

    const handleSubmit = useCallback(
        (onSubmit: (values: FormValues) => Promise<void> | void) => {
            // Touch all fields on submit so all errors become visible
            const allTouched = Object.keys(values).reduce<FormTouched>(
                (acc, key) => ({ ...acc, [key]: true }),
                {}
            );
            setTouched(allTouched);

            const newErrors = validateAll();
            setErrors(newErrors);

            const hasErrors = Object.values(newErrors).some((e) => e !== null);
            if (hasErrors) return;

            setIsSubmitting(true);
            Promise.resolve(onSubmit(values)).finally(() => {
                setIsSubmitting(false);
            });
        },
        [values, validateAll]
    );

    const setFieldError = useCallback((name: string, error: string | null) => {
        setErrors((prev) => ({ ...prev, [name]: error }));
    }, []);

    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    }, [initialValues]);

    return {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldError,
        reset,
    };
}