import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "@/components/ui/sonner";
import DatePickerRange from "../components/ui/date-picker-range";
import { DatePickerRangeExample } from "./datepicker-range-example";

const meta = {
  title: "[02] Components/DatePickerRange",
  component: DatePickerRange,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DatePickerRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <>
      <Toaster />
      <DatePickerRangeExample />
    </>
  ),
};
