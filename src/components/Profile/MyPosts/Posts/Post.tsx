import React from "react"
import style from "./Post.module.scss"

const Post: React.FC<IProps> = React.memo((props) => {
    const {message, likesCount} = props;

    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7dAw7j8Ny5lAQLle2k3iWadcwoUeLqeAKA&usqp=CAU" alt=''/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
});

export default Post;

interface IProps {
    message: string
    likesCount: number
};
