import React from "react";
import {useField} from "formik";

export const TextField = (label, ...props) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input
                {...field} {...props}
                autoComplete="off"
            />
        </div>
    )
}