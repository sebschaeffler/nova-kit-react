// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const meta = {
  title: "[02] Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    // @ts-ignore
    <Command className="w-[350px]">
      {/* @ts-ignore*/}
      <CommandInput placeholder="Type a command or search..." />
      {/* @ts-ignore*/}
      <CommandList>
        {/* @ts-ignore*/}
        <CommandEmpty>No results found.</CommandEmpty>
        {/* @ts-ignore*/}
        <CommandGroup heading="Suggestions">
          {/* @ts-ignore*/}
          <CommandItem>Calendar pro & personal</CommandItem>
          {/* @ts-ignore*/}
          <CommandItem>Notes & pictures</CommandItem>
          <CommandItem>Whiteboard</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
