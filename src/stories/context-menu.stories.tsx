import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const meta = {
  title: "[02] Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Accounts</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Notes</ContextMenuItem>
        <ContextMenuItem>Subscriptions</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
