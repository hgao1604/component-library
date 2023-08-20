import { Upload, UploadProps, UploadFile } from "./Upload";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../Button/Button";

const meta = {
  title: "UI/Upload",
  component: Upload,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    action: "https://jsonplaceholder.typicode.com/posts",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
    onProgress: action("onProgress"),
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
    >
      <Button>Upload</Button>
    </Upload>
  ),
};

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};

export const WithBeforeUpload: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
      beforeUpload={checkFileSize}
    >
      <Button>Upload less than 50KB</Button>
    </Upload>
  ),
};

const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.docx", { type: file.type });
  return Promise.resolve(newFile);
};

export const WithBeforeUploadPromise: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
      beforeUpload={filePromise}
    >
      <Button>With before upload Promise</Button>
    </Upload>
  ),
};

const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hgao.md",
    status: "uploading",
    percent: 30,
  },
  {
    uid: "122",
    size: 1234,
    name: "highcold.md",
    status: "success",
    percent: 30,
  },
  {
    uid: "121",
    size: 1234,
    name: "han.md",
    status: "error",
    percent: 30,
  },
];

export const WithDefaultFileList: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
      beforeUpload={filePromise}
      defaultFileList={defaultFileList}
    >
      <Button>Upload</Button>
    </Upload>
  ),
};

export const WithMoreCustomProperties: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
      header={{ "X-Powered-By": "highcold" }}
      data={{ key: "value" }}
      name={"fileName"}
      withCredentials={true}
    >
      <Button>Upload</Button>
    </Upload>
  ),
};

export const WithDrag: Story = {
  render: (args: UploadProps) => (
    <Upload
      action={args.action}
      onSuccess={args.onSuccess}
      onError={args.onError}
      onProgress={args.onProgress}
      drag={true}
    ></Upload>
  ),
};
