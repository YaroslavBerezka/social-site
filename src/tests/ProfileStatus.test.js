import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusWithHooks from "../components/Profile/ProfileInfo/ProfileStatusWithHooks";

describe("ProfileStatusWithHooks component", () => {
  test("status from props would be in the state", () => {
    const component = create(<ProfileStatusWithHooks status="I am status!" />);
    const instance = component.root;

    expect(instance.props.status).toBe("I am status!");
  });

  test("after creation <span> wouldn't be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="I am status!" />);
    const root = component.root;
    const span = root.findByType("span");

    expect(span.length).not.toBeNull();
  });

  test("after creation <span> would contains correct status", () => {
    const component = create(<ProfileStatusWithHooks status="I am status!" />);
    const root = component.root;
    const span = root.findByType("span");

    expect(span.children[0]).toBe("I am status!");
  });

  test("after creation <input> with status would be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="I am status!" />);
    const root = component.root;
    
    expect(() => {
        const input = root.findByType("input");
    }).toThrow();
  });

  test("<input> would be displayed in editMode instead of <span>", () => {
    let component;

    act(() => {
      component = create(<ProfileStatusWithHooks status="I am status!" />);
    });

    const root = component.root;
    const span = root.findByType("span");

    act(() => span.props.onDoubleClick());

    const input = root.findByType("input");

    expect(input.props.value).toBe("I am status!");
  });

  test("callback would be called", () => {
    const mockCallback = jest.fn();
    let component;

    act(() => component = create(<ProfileStatusWithHooks status="I am status!" updateStatus={mockCallback} />));

    const root = component.root;

    act(() => root.deactivateEditMode());
    
    expect(mockCallback.mock.calls).toBe(1);
  });
});