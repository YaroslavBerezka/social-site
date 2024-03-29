import React from "react"
import { create } from "react-test-renderer"
import Paginator from "../components/common/Paginator/Paginator"

describe("Paginator component test", () => {
    test("pages count is 11 but would be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        const spans = root.findAllByType("span");

        expect(spans.length).toBe(10);
    });

    test("if pages is more then 10 button next would be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        const button = root.findAllByType("button");

        expect(button.length).toBe(0);
    });
});