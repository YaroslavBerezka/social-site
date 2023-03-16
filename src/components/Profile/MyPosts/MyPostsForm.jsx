import React from "react";
import PropTypes from 'prop-types';
import { reduxForm } from "redux-form";
import { Element } from "../../common/FormsControls/FormsControls";
import {renderField} from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const Textarea = Element("textarea");

const MyPostsForm = (props) => {
    const {handleSubmit} = props;
    
    return (
            <form onSubmit={handleSubmit}>
                {renderField("newPostElement", [required, maxLengthCreator(10)], Textarea, "Post message" )}
                <div>
                    <button>Add post</button>
                    {/* <button data-type="remove">Remove</button> */}
                </div>
            </form>
    );
};

MyPostsForm.propTypes = {
    handleSubmit: PropTypes.func,
};

const PostsReduxForm = reduxForm({
    form: "postsForm"
})(MyPostsForm);



export default PostsReduxForm;