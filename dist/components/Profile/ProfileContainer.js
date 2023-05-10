"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Profile_1 = __importDefault(require("./Profile"));
const redux_1 = require("redux");
const react_2 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const withRouter_1 = require("../../hoc/withRouter");
const withAuthRedirect_1 = require("../../hoc/withAuthRedirect");
const header_selectors_1 = require("../../redux/selectors/header-selectors");
const profile_selectors_1 = require("../../redux/selectors/profile-selectors");
const thunk_profile_1 = require("../../api/thunkMW/thunk-profile");
const ProfileContainer = (props) => {
    const { getUserProfile, getStatus, profile, status, updateStatus, router, autorizedUserId, savePhoto, saveProfile } = props;
    const userId = router.params.userId || autorizedUserId;
    (0, react_2.useEffect)(() => {
        getUserProfile(userId);
    }, [userId]);
    (0, react_2.useEffect)(() => {
        getStatus(userId);
    }, [userId]);
    return (react_1.default.createElement(Profile_1.default, { profile: profile, status: status, isOwner: !router.params.userId, updateStatus: updateStatus, getStatus: getStatus, getUserProfile: getUserProfile, savePhoto: savePhoto, saveProfile: saveProfile }));
};
ProfileContainer.propTypes = {
    getStatus: prop_types_1.default.func.isRequired,
    getUserProfile: prop_types_1.default.func.isRequired,
    profile: prop_types_1.default.object,
    router: prop_types_1.default.object.isRequired,
    status: prop_types_1.default.string,
    updateStatus: prop_types_1.default.func.isRequired,
    autorizedUserId: prop_types_1.default.number.isRequired,
    savePhoto: prop_types_1.default.func.isRequired,
    saveProfile: prop_types_1.default.func.isRequired,
};
const mapStateToProps = (state) => ({ profile: (0, profile_selectors_1.getProfile)(state),
    status: (0, profile_selectors_1.getUserStatus)(state),
    autorizedUserId: (0, profile_selectors_1.getAutorizedUserId)(state),
    isAuth: (0, header_selectors_1.getIsAuth)(state), });
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { getUserProfile: thunk_profile_1.getUserProfile, getStatus: thunk_profile_1.getStatus, updateStatus: thunk_profile_1.updateStatus, savePhoto: thunk_profile_1.savePhoto, saveProfile: thunk_profile_1.saveProfile }), withRouter_1.withRouter, withAuthRedirect_1.withAuthRedirect)(ProfileContainer);
//# sourceMappingURL=ProfileContainer.js.map