import React from "react";
import style from "./Post.module.css";

const Post: React.FC<PropsTypes> = React.memo((props) => {
    const {message, likesCount} = props;

    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7dAw7j8Ny5lAQLle2k3iWadcwoUeLqeAKA&usqp=CAU" />
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
});

export default Post;

type PropsTypes = {
    message: string
    likesCount: number
};
