import { Field } from "redux-form";
import styles from "../FormsControls/FormsControls.module.css";

export const Element = (Element) => ({input, meta, ...props}) => {
    const {touched, error} = meta;
    
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const renderField = ( name, validators, component, ...args) => {
    const [type, text, placeholder] = args;
    return <div>
                <Field placeholder={placeholder}
                       name={name}
                       validate={validators}
                       component={component}
                       type={type}/> {text}
            </div>
};