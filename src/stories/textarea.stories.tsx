import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Textarea } from "@/components/ui/textarea";

const meta = {
  title: "[02] Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
