import React from "react";
import Post from "./Posts/Post";
import style from "./MyPosts.module.css";
import PostsReduxForm from "./MyPostsForm";
import { PostType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/selectors/myPosts-selectors";
import { DispatchType } from "../../../redux/redux-store";
import { actionsProfile } from "../../../redux/reducers/profile-reducer";

const MyPosts: React.FC = React.memo(() => {
    const posts = useSelector(getPosts);
    const dispatch: DispatchType = useDispatch();

    const postsElements = 
        posts.length === 0 ? "No posts" 
                           : posts.map((post: PostType) => <Post message={post.message} 
                                                                 key={post.id} 
                                                                 likesCount={post.likesCount} /> );
    const addNewPost = (values: NewMyPostFormType) => {
        dispatch(actionsProfile.addPost(values.newPostElement));
        values.newPostElement = "";
    };

    return (
        <div className={style.postsBlock}>
                <h3>My post</h3>
                <PostsReduxForm onSubmit={addNewPost} />
                <div className={style.posts}>
                    {postsElements}
                </div>
        </div>
    );
});

export default MyPosts;

export type NewMyPostFormType = {
    newPostElement: string
};