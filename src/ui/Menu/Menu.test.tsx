import {
  fireEvent,
  render,
  RenderResult,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem disabled={true}>Menu3</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
        <MenuItem>drop2</MenuItem>
        <MenuItem>drop3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const defaultProps: MenuProps = {
  defaultIndx: "0",
  onSelect: jest.fn(),
  className: "test",
  mode: "horizontal",
};

const verticalProps: MenuProps = {
  defaultIndx: "0",
  onSelect: jest.fn(),
  className: "test",
  mode: "vertical",
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe("test Menu component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(defaultProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("Menu1");
    disabledElement = wrapper.getByText("Menu3");
  });
  it("should render the correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("flex flex-row");
    //expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toHaveClass("underline-primary text-primary");
    expect(disabledElement).toHaveClass(
      "pointer-events-none cursor-not-allowed",
    );
  });
  it("click items should change active and call the right callback", () => {
    const secondeItem = wrapper.getByText("Menu2");
    expect(secondeItem).toBeInTheDocument();
    fireEvent.click(secondeItem);
    expect(secondeItem).toHaveClass("underline-primary text-primary");
    expect(activeElement).not.toHaveClass("underline-primary text-primary");
    expect(defaultProps.onSelect).toHaveBeenCalledWith("1");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("underline-primary text-primary");
  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    wrapper = render(generateMenu(verticalProps));
    menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("flex-col gap-0");
  });
});
