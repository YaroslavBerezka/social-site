import React from "react";
import { NewMyPostFormType } from "./MyPosts";
import { InjectedFormProps, reduxForm } from "redux-form";
import {renderField} from "../../common/FormsControls/FormsControls";
import { Element, GetStringKeys } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";


const Textarea = Element("textarea");

const MyPostsForm: React.FC<InjectedFormProps<NewMyPostFormType, PropsType> & PropsType> = React.memo((props) => {
    const {handleSubmit} = props;
    
    return (
            <form onSubmit={handleSubmit}>
                {renderField<KeysFormType>("newPostElement", [required, maxLengthCreator(50)], Textarea, "Post message" )}
                <div>
                    <button>Add post</button>
                </div>
            </form>
    );
});

const PostsReduxForm = reduxForm<NewMyPostFormType, PropsType>({
    form: "postsForm"
})(MyPostsForm);

export default PostsReduxForm;

type PropsType = {

};
type KeysFormType = GetStringKeys<NewMyPostFormType>;