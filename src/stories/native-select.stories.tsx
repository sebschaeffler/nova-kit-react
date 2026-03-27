import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select";

const meta = {
  title: "[02] Components/Native Select",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      <NativeSelectOption value="grape">Grape</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithOptGroups: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an item</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="potato">Potato</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
    </NativeSelect>
  ),
};

