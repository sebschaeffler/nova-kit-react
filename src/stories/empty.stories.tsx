import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { InboxIcon, PlusCircle, SearchIcon } from "lucide-react";

const meta = {
  title: "[02] Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-[500px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          You don&apos;t have any items yet. Create one to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create item
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <Empty className="w-[500px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

