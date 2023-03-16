import React from "react";
import Post from "./Posts/Post";
import PropTypes from 'prop-types';
import s from "./MyPosts.module.css";
import PostsReduxForm from "./MyPostsForm";

const MyPosts = React.memo((props) => {
    const {posts, addPost} = props;

    const postsElements = 
        posts.length === 0 ? "No posts" : props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} /> );

    const addNewPost = (values) => {
        addPost(values.newPostElement);
    };


    return (
        <div className={s.postsBlock}>
                <h3>My post</h3>
                <PostsReduxForm onSubmit={addNewPost} />
                <div className={s.posts}>
                    {postsElements}
                </div>
        </div>
    );
});

MyPosts.propTypes = {
    addPost: PropTypes.func.isRequired,
    removePost: PropTypes.func,
    posts: PropTypes.array.isRequired,
}

export default MyPosts;