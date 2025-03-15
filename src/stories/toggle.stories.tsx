import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "[02] Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
    children: <>Toggle me</>,
  },
};
