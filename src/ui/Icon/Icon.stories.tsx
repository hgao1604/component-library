import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
//import { faHome } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// export type ThemeProps =
//   | "primary"
//   | "secondary"
//   | "success"
//   | "info"
//   | "warning"
//   | "danger"
//   | "light"
//   | "dark";

export const Primary: Story = {
  args: {
    theme: "primary",
    icon: "home",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    icon: "search",
  },
};

export const Success: Story = {
  args: {
    theme: "success",
    icon: "check",
  },
};

export const Info: Story = {
  args: {
    theme: "info",
    icon: "info",
  },
};

export const Warning: Story = {
  args: {
    theme: "warning",
    icon: "warning",
  },
};

export const Danger: Story = {
  args: {
    theme: "danger",
    icon: "warning",
  },
};

export const Light: Story = {
  args: {
    theme: "light",
    icon: "sun",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    icon: "moon",
  },
};
