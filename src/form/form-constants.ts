import { FieldSectionType } from "@/form/form-types"; // Utility function to generate a random unique key

export const FORM_FIELD_EMPTY_KEY = "form-empty-field";

// Utility function to generate a random unique key
const generateUniqueKey = (): string => {
  return `${FORM_FIELD_EMPTY_KEY}-${Math.random().toString(36).substring(2, 9)}`;
};

export const buildFormEmptyField = (): FieldSectionType => {
  const uniqueKey = generateUniqueKey();
  return {
    [uniqueKey]: { render: () => null },
  };
};
