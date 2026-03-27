import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta = {
  title: "[02] Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { onCheckedChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="small-switch" {...args} />
      <Label htmlFor="small-switch">Small switch</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

