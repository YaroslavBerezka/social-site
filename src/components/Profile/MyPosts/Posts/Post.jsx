import s from "./Post.module.css";
import PropTypes from 'prop-types';

const Post = (props) => {
    const {message, likesCount} = props;

    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7dAw7j8Ny5lAQLle2k3iWadcwoUeLqeAKA&usqp=CAU" />
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
};

Post.propsTypes = {
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
};

export default Post;