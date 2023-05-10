import React from "react";
import { useSelector } from "react-redux";
import { Formik, Field, Form, } from "formik";
import { FilterType } from "../../redux/reducers/users-reducer";
import { getFilter } from "../../redux/selectors/users-selectors";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};

export const UsersSearchForm:React.FC<PropsType> = React.memo((props) => {
    const {onFilterChanged} = props;
    const filter = useSelector(getFilter);

    const submit = (values: FormType, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null 
                                             : values.friend === "true" ? true 
                                                                        : false };
        onFilterChanged(filter);
        setSubmitting(false);
      };

    return (
        <div>
            <Formik
                enableReinitialize= {true}
                initialValues={{ term: filter.term,  friend: String(filter.friend) }}
                validate={usersSearchFormValidate}
                //@ts-ignore
                onSubmit={submit}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="text" name="term" />
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
});

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
};
type FormType = {
    term: string
    friend: "true" | "false" | "null"
};