import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "@nova/components/smart/sidebar/Sidebar";
import { Package, Package2, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@nova/components/ui/badge/badge";
import { NovaNavSection } from "@nova/components/common/navigation";

const meta = {
  title: "[01] Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const navigationSections: Array<NovaNavSection> = [
  {
    label: "Home",
    items: [
      {
        iconNodeLeft: <Package2 className="h-[20px] w-[20px]" />,
        label: "Dashboard",
        url: "#",
      },
      {
        iconNodeLeft: <ShoppingCart className="h-[20px] w-[20px]" />,
        iconNodeRight: (
          <Badge
            className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        ),
        label: "Orders",
        url: "#",
      },
    ],
  },
  {
    label: "Reference Data",
    items: [
      {
        iconNodeLeft: <Package className="h-[20px] w-[20px]" />,
        label: "Packages",
        url: "#",
      },
      {
        iconNodeLeft: <Users className="h-[20px] w-[20px]" />,
        label: "Team",
        url: "#",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    navigationSections,
  },
  render: () => <Sidebar navigationSections={navigationSections} />,
};
