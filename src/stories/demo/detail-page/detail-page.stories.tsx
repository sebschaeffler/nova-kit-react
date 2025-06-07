import type { Meta, StoryObj } from "@storybook/react-vite";
import { HandCoins, Package, Package2, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import FormDemo from "./form-demo";
import { NovaNavSection } from "@/components/navigation";

const meta = {
  title: "[00] Demo/Detail Page",
  component: FormDemo,
  args: {},
  argTypes: {},
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

const breadcrumbNavItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Packages",
    url: "/packages",
  },
];

const sidebarNavItems: Array<NovaNavSection> = [
  {
    label: "Home",
    items: [
      {
        id: "dashboard",
        iconNodeLeft: <Package2 className="h-[20px] w-[20px]" />,
        label: "Dashboard",
        url: "#",
      },
      {
        id: "orders",
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
    label: "Configuration",
    items: [
      {
        id: "packages",
        iconNodeLeft: <Package className="h-[20px] w-[20px]" />,
        label: "Packages",
        url: "#",
        isSelected: true,
      },
      {
        id: "pricing",
        iconNodeLeft: <HandCoins className="h-[20px] w-[20px]" />,
        label: "Pricing & delivery",
        url: "#",
      },
      {
        id: "team",
        iconNodeLeft: <Users className="h-[20px] w-[20px]" />,
        label: "Team",
        url: "#",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    navItems: breadcrumbNavItems,
    subheaderTitle: "Workarea",
  },
  parameters: {
    layout: "fullscreen",
    bottomPanelHeight: 0,
    rightPanelWidth: 0,
    options: {
      showPanel: false,
      showAddonPanel: false,
    },
  },
  render: () => (
    <div className="flex w-full p-10">
      <FormDemo />
    </div>
  ),
};
