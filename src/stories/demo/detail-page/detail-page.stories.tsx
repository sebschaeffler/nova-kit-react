import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import FormDemo from "./form-demo";

const meta = {
  title: "[00] Demo/Detail Page",
  component: FormDemo,
  args: {},
  argTypes: {},
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    layout: "fullscreen",
    bottomPanelHeight: 0,
    rightPanelWidth: 0,
    options: {
      showPanel: false,
      showAddonPanel: false,
    },
  },
  render: () => <FormDemo />,
};
