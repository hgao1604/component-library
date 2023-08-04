import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

const defaultProps = {
  onClick: jest.fn(),
};
const disabledProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Default</Button>);
    const element = wrapper.getByText("Default");
    expect(element.tagName).toEqual("BUTTON");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={"link"} href="www.google.com">
        Link
      </Button>,
    );
    const element = wrapper.getByText("Link");
    expect(element.tagName).toEqual("A");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>);
    const element = wrapper.getByText("Disabled") as HTMLButtonElement;
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
