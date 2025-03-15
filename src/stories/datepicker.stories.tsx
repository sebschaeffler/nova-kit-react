import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerForm } from "@/components/ui/date-picker-form";
import { DatePickerFormExample } from "@/stories/datepicker-example";
import { Toaster } from "@/components/ui/sonner";

const meta = {
  title: "[02] Components/Datepicker",
  component: DatePickerForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePickerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    field: {
      value: "",
    },
  },
  render: () => (
    <>
      <Toaster />
      <DatePickerFormExample />
    </>
  ),
};
