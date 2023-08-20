import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    btnType: "primary",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    btnType: "danger",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    btnType: "link",
    href: "https://www.google.com",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
