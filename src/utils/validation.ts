
export type ValidationRule = (value: string) => string | null;

export function required(message = "This field is required"): ValidationRule {
    return (value) => {
        return value.trim().length === 0 ? message : null;
    };
}

export function minLength(min: number, message?: string): ValidationRule {
    return (value) => {
        if (value.length === 0) return null; // let required() handle empty
        return value.length < min
            ? (message ?? `Must be at least ${min} characters`)
            : null;
    };
}

export function maxLength(max: number, message?: string): ValidationRule {
    return (value) => {
        return value.length > max
            ? (message ?? `Must be no more than ${max} characters`)
            : null;
    };
}

export function isEmail(message = "Must be a valid email address"): ValidationRule {
    return (value) => {
        if (value.length === 0) return null;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : message;
    };
}

export function pattern(regex: RegExp, message: string): ValidationRule {
    return (value) => {
        if (value.length === 0) return null;
        return regex.test(value) ? null : message;
    };
}

export function composeRules(...rules: ValidationRule[]): ValidationRule {
    return (value) => {
        for (const rule of rules) {
            const error = rule(value);
            if (error !== null) return error;
        }
        return null;
    };
}