import React, { FC, createContext } from "react";
import useStore from "./useStore";

export interface FormProps {
  children?: React.ReactNode;
  name?: string;
  initialValues?: Record<string, any>;
}

export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  "dispatch" | "fields" | "validateFields"
> &
  Pick<FormProps, "initialValues">;
export const FormContext = createContext<IFormContext>({} as IFormContext);

const Form: FC<FormProps> = (props) => {
  const { children, name, initialValues } = props;
  const { dispatch, fields, validateFields } = useStore();
  const passedContext: IFormContext = {
    dispatch,
    fields,
    initialValues,
    validateFields,
  };
  return (
    <form name={name} className="flex flex-col">
      <FormContext.Provider value={passedContext}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
