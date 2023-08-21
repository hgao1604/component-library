import { FC } from "react";
import Form, { FormProps } from "./Form";
import FormItem, { FormItemProps } from "./FormItem";

export type IFormComponent = FC<FormProps> & {
  Item: FC<FormItemProps>;
};
const TransForm = Form as IFormComponent;

TransForm.Item = FormItem;

export default TransForm;
