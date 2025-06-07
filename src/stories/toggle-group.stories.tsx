import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const meta = {
  title: "[02] Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
    variant: "default",
    type: "single",
    children: (
      <>
        <ToggleGroupItem value="a">Fruits</ToggleGroupItem>
        <ToggleGroupItem value="b">Vegetables</ToggleGroupItem>
        <ToggleGroupItem value="c">Meat</ToggleGroupItem>
      </>
    ),
  },
};
