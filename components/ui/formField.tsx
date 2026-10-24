import {InputHTMLAttributes} from "react";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    hint?: string;
}

export default function FormField({id, name, label, error, hint, className = "", ...inputProps}: FormFieldProps) {
    const inputID: string | undefined = id ?? name;
    const messageID: string = `${inputID}-message`;

    return (
        <div className="space-y-2">
            <label htmlFor={inputID}
                   className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <input id={inputID}
                   name={name}
                   aria-invalid={Boolean(error)}
                   aria-describedby={error || hint ? messageID : undefined}
                   className={`w-full rounded-lg border bg-white px-4 py-3
                               text-sm text-gray-900
                             placeholder:text-gray-400
                               outline-none transition-colors
                               ${error
                       ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                       : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                   }
                            disabled:cursor-not-allowed
                          disabled:bg-gray-100
                          disabled:text-gray-500
                            disabled:opacity-70
                            ${className}
        `}                  {...inputProps}
            />

            {
                (error || hint) && (
                    <p id={messageID}
                       role={error ? "alert" : undefined}
                       className={`text-sm ${error ? "text-red-600" : "text-gray-500"}`}>
                        {error ?? hint}
                    </p>
                )
            }
        </div>
    );
}