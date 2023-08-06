import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter your name",
    disabled: true,
  },
};

export const SizeLarge: Story = {
  args: {
    placeholder: "Enter your name",
    size: "lg",
  },
};

export const SizeSmall: Story = {
  args: {
    placeholder: "Enter your name",
    size: "sm",
  },
};

export const Icon: Story = {
  args: {
    placeholder: "Enter your name",
    icon: "search",
  },
};

export const Prepand: Story = {
  args: {
    placeholder: "Enter your name",
    prepand: "https://",
  },
};

export const Append: Story = {
  args: {
    placeholder: "Enter your name",
    append: ".com",
  },
};
