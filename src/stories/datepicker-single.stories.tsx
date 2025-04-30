import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/sonner";
import DatePickerSingle from "../components/ui/date-picker-single";
import { DatePickerSingleExample } from "./datepicker-single-example";

const meta = {
  title: "[02] Components/DatePickerSingle",
  component: DatePickerSingle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePickerSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <>
      <Toaster />
      <DatePickerSingleExample />
    </>
  ),
};
