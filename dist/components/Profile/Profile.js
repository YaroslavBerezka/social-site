"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Profile_module_css_1 = __importDefault(require("./Profile.module.css"));
const ProfileInfo_1 = __importDefault(require("./ProfileInfo/ProfileInfo"));
const MyPostsContainer_1 = __importDefault(require("./MyPosts/MyPostsContainer"));
const Profile = (props) => {
    const { profile, status, updateStatus, isOwner, savePhoto, saveProfile } = props;
    return (React.createElement("div", { className: Profile_module_css_1.default.profile },
        React.createElement(ProfileInfo_1.default, { profile: profile, isOwner: isOwner, status: status, savePhoto: savePhoto, updateStatus: updateStatus, saveProfile: saveProfile }),
        React.createElement(MyPostsContainer_1.default, null)));
};
Profile.propTypes = {
    getStatus: prop_types_1.default.func.isRequired,
    getUserProfile: prop_types_1.default.func.isRequired,
    profile: prop_types_1.default.object,
    status: prop_types_1.default.string,
    updateStatus: prop_types_1.default.func.isRequired,
    saveProfile: prop_types_1.default.func.isRequired,
};
exports.default = Profile;
//# sourceMappingURL=Profile.js.map