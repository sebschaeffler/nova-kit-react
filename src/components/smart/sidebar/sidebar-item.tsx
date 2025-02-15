"use client";

import React from "react";
import { cn } from "@nova/utils/style-utils";
import { Label } from "@nova/components/ui/label/label";
import Link from "next/link";
import {
  NOVA_SIDEBAR_DEFAULT_HOVER_BACKGROUND,
  NOVA_SIDEBAR_DEFAULT_SELECTED_BACKGROUND,
} from "@nova/components/smart/sidebar/Sidebar";
import { NovaNavItem } from "@nova/components/common/navigation";
import { usePathname } from "next/navigation";

const SidebarItem = ({
                       index,
                       item,
                       mustPrefetchLink,
                     }: {
  item: NovaNavItem;
  index: number;
  mustPrefetchLink: boolean;
}) => {
  const pathname = usePathname();
  const isSelected = item.isSelected ?? item.url === pathname;

  return (
    <Link
      prefetch={mustPrefetchLink}
      key={index}
      href={item.url || "#"}
      className={cn(
        "flex items-center gap-3 px-3",
        "h-[40px] text-muted-foreground transition-all",
        "group",
        "[&>*]:hover:cursor-pointer",
        "border-r-[4px]",
        "rounded-l-lg",
        isSelected && "text-primary [&>*]:font-bold",
        isSelected ? "border-r-primary" : "border-r-transparent",
        isSelected ? NOVA_SIDEBAR_DEFAULT_SELECTED_BACKGROUND : "",
        NOVA_SIDEBAR_DEFAULT_HOVER_BACKGROUND,
        "hover:border-r-primary",
        item.className,
      )}
    >
      {item.iconNodeLeft}
      <Label className="group-hover:font-bold group-hover:text-primary">
        {item.label}
      </Label>
      {item.iconNodeRight}
    </Link>
  );
};

export default SidebarItem;
