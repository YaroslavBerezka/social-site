"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const Paginator_module_css_1 = __importDefault(require("./Paginator.module.css"));
const react_1 = __importStar(require("react"));
const Paginator = (props) => {
    const { totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 } = props;
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;
    (0, react_1.useEffect)(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = (0, react_1.useState)(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    return (react_1.default.createElement("div", { className: Paginator_module_css_1.default.paginator },
        portionNumber > 1 &&
            react_1.default.createElement("button", { className: Paginator_module_css_1.default.buttons, onClick: () => setPortionNumber(portionNumber - 1) }, "\u276E"),
        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
            return react_1.default.createElement("span", { className: (0, classnames_1.default)({ [Paginator_module_css_1.default.selectedPage]: currentPage === p }, Paginator_module_css_1.default.pageNumber), key: p, onClick: () => onPageChanged(p) }, p);
        }),
        portionCount > portionNumber &&
            react_1.default.createElement("button", { className: Paginator_module_css_1.default.buttons, onClick: () => setPortionNumber(portionNumber + 1) }, "\u276F")));
};
Paginator.propTypes = {
    currentPage: prop_types_1.default.number.isRequired,
    pageSize: prop_types_1.default.number.isRequired,
    totalItemsCount: prop_types_1.default.number.isRequired,
    onPageChanged: prop_types_1.default.func.isRequired,
};
exports.default = Paginator;
//# sourceMappingURL=Paginator.js.map