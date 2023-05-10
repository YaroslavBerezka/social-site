"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const ProfileData_1 = __importDefault(require("./ProfileData"));
const ProfileInfo_module_css_1 = __importDefault(require("./ProfileInfo.module.css"));
const ProfileDataForm_1 = __importDefault(require("./ProfileDataForm"));
const user_png_1 = __importDefault(require("../../../assets/images/user.png"));
const Preloader_1 = __importDefault(require("../../common/Preloader/Preloader"));
const ProfileStatusWithHooks_1 = __importDefault(require("./ProfileStatusWithHooks"));
const ProfileInfo = (props) => {
    const { profile, status, updateStatus, isOwner, savePhoto, saveProfile } = props;
    const [editMode, setEditMod] = (0, react_1.useState)(false);
    if (!profile) {
        return React.createElement(Preloader_1.default, null);
    }
    ;
    const activateEditMode = () => {
        isOwner && setEditMod(true);
    };
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
            setEditMod(false);
        });
    };
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("div", { className: ProfileInfo_module_css_1.default.descriptionBlock },
                React.createElement("div", { className: ProfileInfo_module_css_1.default.currentProfile },
                    React.createElement("img", { className: ProfileInfo_module_css_1.default.mainPhoto, src: profile.photos.large != null ? profile.photos.large
                            : user_png_1.default }),
                    isOwner ? React.createElement("input", { type: "file", onChange: onMainPhotoSelected, name: "file" })
                        : isOwner),
                React.createElement(ProfileStatusWithHooks_1.default, { status: status, updateStatus: updateStatus, isOwner: isOwner }),
                editMode ? React.createElement(ProfileDataForm_1.default, { initialValues: profile, profile: profile, activateEditMode: activateEditMode, onSubmit: onSubmit })
                    : React.createElement(ProfileData_1.default, { profile: profile, isOwner: isOwner, activateEditMode: activateEditMode })))));
};
ProfileInfo.propTypes = {
    profile: prop_types_1.default.object,
    status: prop_types_1.default.string,
    updateStatus: prop_types_1.default.func.isRequired,
    saveProfile: prop_types_1.default.func.isRequired,
};
exports.default = ProfileInfo;
//# sourceMappingURL=ProfileInfo.js.map