import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { InputForm } from "@/stories/form-example";

const meta = {
  title: "[02] Components/FormInput",
  component: InputForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
