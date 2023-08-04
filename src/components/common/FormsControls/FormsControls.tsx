import React from "react"
import { Field, WrappedFieldProps } from "redux-form"
import { FieldValidatorType } from "../../../utils/validators/validators"
import style from "../FormsControls/FormsControls.module.scss"

export const Element = (type: string): React.FC<WrappedFieldProps> => ({input, meta, ...args}) => {
    const InputElement = type === "input" ? <input {...input} {...args} />
                                          : <textarea {...input} {...args} />;
    const {touched, error} = meta;
    
    const hasError = touched && error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {InputElement} 
            {hasError && <span>{error}</span>}
        </div>
    );
};


export function renderField<FormKeysType extends string>( name: FormKeysType, 
                                                          validators: Array<FieldValidatorType>, 
                                                          component: React.FC<WrappedFieldProps>,
                                                          ...args: Array<string | null> ) {
    const [type, text, placeholder] = args;
    return (
        <div>
            <Field  placeholder={placeholder}
                    name={name}
                    validate={validators}
                    component={component}
                    type={type} /> {text}
        </div>
    );
};

export type GetStringKeys<T> = Extract<keyof T, string>;