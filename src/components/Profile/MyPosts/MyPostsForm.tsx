import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import { Element, GetStringKeys, renderField } from "../../common/FormsControls/FormsControls"
import { INewMyPostForm } from "./MyPosts"


const Textarea = Element("textarea");

const MyPostsForm: React.FC<InjectedFormProps<INewMyPostForm, PropsType> & PropsType> = React.memo((props) => {
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

const PostsReduxForm = reduxForm<INewMyPostForm, PropsType>({
    form: "postsForm"
})(MyPostsForm);

export default PostsReduxForm;

type PropsType = {

};
type KeysFormType = GetStringKeys<INewMyPostForm>;