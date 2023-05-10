"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const NotFound_module_css_1 = __importDefault(require("./NotFound.module.css"));
const NotFound = (props) => {
    return (React.createElement("div", { className: NotFound_module_css_1.default.notFound },
        React.createElement("b", null, "404 NOT FOUND")));
};
exports.NotFound = NotFound;
//# sourceMappingURL=NotFound.js.map