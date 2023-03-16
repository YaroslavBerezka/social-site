import MyPosts from "./MyPosts";
import { compose } from "redux";
import { connect } from "react-redux";
import { addPost } from "../../../redux/reducers/profile-reducer";
import { getPosts } from "../../../redux/selectors/myPosts-selectors";

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    }
};

export default compose(
    connect(mapStateToProps, {addPost}))(MyPosts);