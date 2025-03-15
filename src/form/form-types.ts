import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

export type FieldSectionTypeAttributes = {
  formName?: string;
  label?: string;
  renderLabel?: () => React.ReactNode;
  labelClassName?: string;
  isRequired?: boolean;
  description?: string;
  className?: string;
  render?: (
    formField: Partial<ControllerRenderProps>,
    isEditing?: boolean,
    form?: UseFormReturn<any>,
  ) => React.JSX.Element | React.ReactNode;
  isHidden?: boolean;
  value?: any;
} & Partial<ControllerRenderProps>;

export type FieldSectionType = {
  [key: string]: FieldSectionTypeAttributes;
};
