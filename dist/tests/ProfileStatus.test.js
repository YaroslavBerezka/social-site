"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_test_renderer_1 = require("react-test-renderer");
describe("ProfileStatusWithHooks component", () => {
    test("status from props would be in the state", () => {
        const component = (0, react_test_renderer_1.create)(status, "I am status!" /  > );
        const instance = component.root;
        expect(instance.props.status).toBe("I am status!");
    });
    test("after creation <span> wouldn't be displayed", () => {
        const component = (0, react_test_renderer_1.create)(status, "I am status!" /  > );
        const root = component.root;
        const span = root.findByType("span");
        expect(span.length).not.toBeNull();
    });
    test("after creation <span> would contains correct status", () => {
        const component = (0, react_test_renderer_1.create)(status, "I am status!" /  > );
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("I am status!");
    });
    test("after creation <input> with status would be displayed", () => {
        const component = (0, react_test_renderer_1.create)(status, "I am status!" /  > );
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
    test("<input> would be displayed in editMode instead of <span>", () => {
        let component;
        (0, react_test_renderer_1.act)(() => {
            component = (0, react_test_renderer_1.create)(status, "I am status!" /  > );
        });
        const root = component.root;
        const span = root.findByType("span");
        (0, react_test_renderer_1.act)(() => span.props.onDoubleClick());
        const input = root.findByType("input");
        expect(input.props.value).toBe("I am status!");
    });
    test("callback would be called", () => {
        const mockCallback = jest.fn();
        let component;
        (0, react_test_renderer_1.act)(() => component = (0, react_test_renderer_1.create)(status, "I am status!", updateStatus = { mockCallback } /  > ));
        const root = component.root;
        (0, react_test_renderer_1.act)(() => root.deactivateEditMode());
        expect(mockCallback.mock.calls).toBe(1);
    });
});
//# sourceMappingURL=ProfileStatus.test.js.map