import type { Meta, StoryObj } from "@storybook/react";
import DatePickerForm from "@nova/components/ui/calendar/date-picker-form";
import { DatePickerFormExample } from "@nova/components/ui/calendar/datepicker-example";
import { Toaster } from "@nova/components/ui/sonner/sonner";

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
