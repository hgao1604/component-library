import { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const meta = {
  title: "UI/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    mode: "horizontal",
  },
  render: (args) => (
    <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
  ),
};

export const Vertical: Story = {
  args: {
    mode: "vertical",
  },
  render: (args) => (
    <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
  ),
};

export const DefaultIndx: Story = {
  args: {
    defaultIndx: "1",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
  ),
};

export const DefaultOpenSubMenu: Story = {
  args: {
    defaultOpenSubMenus: ["0"],
    mode: "vertical",
  },
  render: (args) => (
    <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
  ),
};

export const OnSelect: Story = {
  args: {
    onSelect: (index) => {
      alert("The index is " + index);
    },
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
  ),
};
