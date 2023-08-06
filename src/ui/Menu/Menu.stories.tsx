import {Meta, StoryFn, ComponentMeta} from '@storybook/react';

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const menuMeta: Meta<typeof Menu> = {
  title: "Menu",
  id: "Menu",
  tags: ['autodocs'],
  component: Menu,
}

export default menuMeta;

export const DefaultMenu: StoryFn<typeof Menu> = (args) => (
  <Menu {...args}>
    <SubMenu title="DropDown">
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu1</MenuItem>
    </SubMenu>
    <MenuItem>Menu2</MenuItem>
    <MenuItem>Menu3</MenuItem>
    <MenuItem disabled={true}>Menu4</MenuItem>
  </Menu>
)

DefaultMenu.storyName = "Default Menu"

export const VerticalMenu: StoryFn<typeof Menu> = (args) => (
  <Menu {...args} mode="vertical">
    <SubMenu title="DropDown">
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu1</MenuItem>
    </SubMenu>
    <MenuItem>Menu2</MenuItem>
    <MenuItem>Menu3</MenuItem>
    <MenuItem disabled={true}>Menu4</MenuItem>
  </Menu>
)
