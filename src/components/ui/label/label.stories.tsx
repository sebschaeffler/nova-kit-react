import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@nova/components/ui/checkbox/checkbox";
import { Label } from "@nova/components/ui/label/label";

const meta = {
  title: "[02] Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  ),
};
