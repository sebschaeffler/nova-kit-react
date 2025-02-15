import React from "react";

export type NovaNavItem = {
  id?: string; // mandatory if isSelected is used
  label: string;
  url?: string; // if url === pathname then the item is selected in the sidebar
  action?: Function;
  iconNodeLeft?: React.ReactNode;
  iconNodeRight?: React.ReactNode;
  className?: string;
  isSelected?: boolean; // Manually set the item as selected
};

export type NovaNavSection = {
  label: string;
  items: Array<NovaNavItem>;
};
