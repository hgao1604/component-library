import React, { FC, useContext, useEffect } from "react";
import { FormContext } from "./Form";
import { RuleItem } from "async-validator";

export type SomeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
interface FormItemProps {
  name: string;
  label?: string;
  children?: React.ReactNode;
  valuePropName?: string;
  trigger?: string;
  getValueFromEvent?: (event: any) => any;
  rules?: RuleItem[];
  validateTrigger?: string;
}

const FormItem: FC<FormItemProps> = (props) => {
  const {
    label,
    children,
    name,
    valuePropName,
    trigger,
    getValueFromEvent,
    rules,
    validateTrigger,
  } = props as SomeRequired<
    FormItemProps,
    "trigger" | "getValueFromEvent" | "valuePropName" | "validateTrigger"
  >;
  const { dispatch, fields, initialValues, validateFields } =
    useContext(FormContext);
  useEffect(() => {
    const value = initialValues?.[name];
    dispatch({
      type: "addField",
      name,
      value: { label, name, value: value || "", rules },
    });
    return () => {
      dispatch({ type: "removeItem", payload: { label } });
    };
  }, []);
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e);
    dispatch({
      type: "updateField",
      name,
      value,
    });
  };
  const field = fields[name];
  const value = field?.value;
  const errors = field?.errors;
  const isRequired = rules?.some((rule) => rule.required);
  const hasError = errors?.length > 0;
  // 1. add a props manually with value and onChange
  const controlProps: Record<string, any> = {};
  controlProps[valuePropName] = value;
  controlProps[trigger] = onValueUpdate;
  const onValidate = async () => {
    await validateFields(name);
  };
  if (rules) {
    controlProps[validateTrigger] = onValidate;
  }
  // 2. get the first element
  const childList = React.Children.toArray(children);
  // todo check if it is a valid element
  if (childList.length === 0) throw new Error("FormItem must have a child");
  if (childList.length > 1) throw new Error("FormItem can only have one child");
  if (!React.isValidElement(childList[0]))
    throw new Error("FormItem child must be a valid React element");
  const child = childList[0] as React.ReactElement;
  // 3. clone the element with new props
  const newChild = React.cloneElement(child as React.ReactElement, {
    ...controlProps,
    ...child.props,
  });

  return (
    <div className="flex items-center justify-start gap-4">
      {label && <label title={label}>{label}</label>}
      <div>
        <div>{newChild}</div>
        {hasError && (
          <div className="text-sm text-red-500">{errors?.[0].message}</div>
        )}
      </div>
    </div>
  );
};

FormItem.defaultProps = {
  valuePropName: "value",
  trigger: "onChange",
  getValueFromEvent: (e: any) => e.target.value,
  validateTrigger: "onBlur",
};

export default FormItem;
