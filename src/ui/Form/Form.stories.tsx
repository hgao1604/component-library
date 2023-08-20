import Form from "./Form";
import FormItem from "./FormItem";
import Input from "../Input/Input";
import Button from "../Button/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "basic",
  },
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
  },
  render: (args) => (
    <Form {...args} initialValues={{ username: "hg", remember: true }}>
      <FormItem
        label="Username"
        name="username"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </FormItem>
      <FormItem label="Password" name="password">
        <Input />
      </FormItem>
      <div className="flex items-center gap-2">
        <FormItem
          name="remember"
          valuePropName="checked"
          getValueFromEvent={(e) => e.target.checked}
        >
          <Input type="checkbox" />
        </FormItem>
        <span>Remember me</span>
      </div>
      <FormItem name="submit">
        <Button type="submit">Submit</Button>
      </FormItem>
    </Form>
  ),
};
