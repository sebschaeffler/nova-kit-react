import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/ui/calendar";

const meta = {
  title: "[02] Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: () => <Calendar mode="single" className="rounded-md border" />,
};
