import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@nova/components/ui/toast/toast";
import ToastExample from "@nova/components/ui/toast/toast-example";
import { Toaster } from "./toaster";

const meta = {
  title: "[02] Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <>
      <Toaster />
      <ToastExample />
    </>
  ),
};
