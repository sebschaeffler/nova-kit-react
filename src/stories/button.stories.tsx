import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components";

const meta = {
  title: "[02] Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
    children: "Secondary Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    disabled: false,
    children: "Destructive Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    disabled: false,
    children: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    disabled: false,
    children: "Small Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    disabled: false,
    children: "Outline Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    disabled: false,
    children: (
      <>
        <ChevronRight className="h-4 w-4" />
      </>
    ),
  },
};

export const WithIconAndText: Story = {
  args: {
    variant: "default",
    disabled: false,
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </>
    ),
  },
};

export const WithTwoIconsAndText: Story = {
  args: {
    variant: "default",
    disabled: false,
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
        <Mail className="ml-2 h-4 w-4" />
      </>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    disabled: false,
    children: "Ghost Button",
  },
};

export const GhostDestructive: Story = {
  args: {
    variant: "ghost-destructive",
    disabled: false,
    children: "Destructive Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    disabled: false,
    children: "Link",
  },
};
