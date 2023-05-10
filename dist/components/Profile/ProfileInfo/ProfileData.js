"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const ProfileContacts_1 = require("./ProfileContacts");
const ProfileInfo_module_css_1 = __importDefault(require("./ProfileInfo.module.css"));
const Preloader_1 = __importDefault(require("../../common/Preloader/Preloader"));
const ProfileData = (props) => {
    const { profile, isOwner, activateEditMode } = props;
    if (!profile) {
        return React.createElement(Preloader_1.default, null);
    }
    ;
    return (React.createElement("div", { className: ProfileInfo_module_css_1.default.contacts, onDoubleClick: activateEditMode },
        React.createElement("div", null,
            React.createElement("b", null, "Full name:"),
            " ",
            profile.fullName),
        React.createElement("div", null,
            React.createElement("b", null, "Looking for a job:"),
            " ",
            profile.lookingForAJob ? "yes"
                : "no"),
        profile.lookingForAJob && React.createElement("div", null,
            React.createElement("b", null, "My professional skills:"),
            " ",
            profile.lookingForAJobDescription),
        React.createElement("div", null,
            React.createElement("b", null, "About me:"),
            " ",
            profile.aboutMe),
        React.createElement("div", null,
            React.createElement("b", null, "Contacts:"),
            " ",
            Object.keys(profile.contacts).map(key => {
                return React.createElement(ProfileContacts_1.Contact, { contactTitle: key, contactValue: profile.contacts[key], key: key });
            }))));
};
ProfileData.propTypes = {
    profile: prop_types_1.default.object,
};
exports.default = ProfileData;
//# sourceMappingURL=ProfileData.js.map