"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const thunk_auth_1 = require("../../api/thunkMW/thunk-auth");
const header_selectors_1 = require("../../redux/selectors/header-selectors");
const HeaderContainer = (props) => {
    return react_1.default.createElement(Header_1.default, Object.assign({}, props));
};
const mapStateToProps = (state) => ({
    isAuth: (0, header_selectors_1.getIsAuth)(state),
    login: (0, header_selectors_1.getLogin)(state),
});
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { logout: thunk_auth_1.logout }))(HeaderContainer);
//# sourceMappingURL=HeaderContainer.js.map