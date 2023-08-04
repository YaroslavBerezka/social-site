import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { IPost } from "../../../interfaces/interfaces"
import { actionsProfile } from "../../../redux/reducers/profile-reducer"
import { DispatchType } from "../../../redux/redux-store"
import { getPosts } from "../../../redux/selectors/myPosts-selectors"
import style from "./MyPosts.module.scss"
import PostsReduxForm from "./MyPostsForm"
import Post from "./Posts/Post"

const MyPosts: React.FC = React.memo(() => {
    const posts = useSelector(getPosts);
    const dispatch: DispatchType = useDispatch();

    const postsElements = 
        posts.length === 0 ? "No posts" 
                           : posts.map((post: IPost) => <Post message={post.message} 
                                                                 key={post.id} 
                                                                 likesCount={post.likesCount} /> );
    const addNewPost = (values: INewMyPostForm) => {
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

export interface INewMyPostForm {
    newPostElement: string
};