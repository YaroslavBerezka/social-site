import Dialogs from "./Dialogs";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage } from "../../redux/reducers/messages-reducer";
import { getMessagePage } from "../../redux/selectors/dialogs-selectors";

const mapStateToProps = (state) => {
    return {
        messagesPage: getMessagePage(state),
    } 
}


export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect,
)(Dialogs);