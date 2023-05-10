"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_test_renderer_1 = require("react-test-renderer");
describe("Paginator component test", () => {
    test("pages count is 11 but would be showed only 10", () => {
        const component = (0, react_test_renderer_1.create)(totalItemsCount, { 11:  }, pageSize = { 1:  }, portionSize = { 10:  } /  > );
        const root = component.root;
        const spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    test("if pages is more then 10 button next would be present", () => {
        const component = (0, react_test_renderer_1.create)(totalItemsCount, { 11:  }, pageSize = { 1:  }, portionSize = { 10:  } /  > );
        const root = component.root;
        const button = root.findAllByType("button");
        expect(button.length).toBe(0);
    });
});
//# sourceMappingURL=Paginator.test.js.map