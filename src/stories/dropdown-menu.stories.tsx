import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const meta = {
  title: "[02] Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My space</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Calendar</DropdownMenuItem>
        <DropdownMenuItem>Notes</DropdownMenuItem>
        <DropdownMenuItem>Pictures</DropdownMenuItem>
        <DropdownMenuItem>Subscriptions</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
