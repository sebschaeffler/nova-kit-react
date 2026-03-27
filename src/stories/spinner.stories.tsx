import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@/components/ui/spinner";

const meta = {
  title: "[02] Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    className: "size-8",
  },
};

export const Small: Story = {
  args: {
    className: "size-3",
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Spinner {...args} />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  ),
};

