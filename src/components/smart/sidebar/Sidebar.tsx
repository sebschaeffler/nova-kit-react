import React from "react";
import { Label } from "@nova/components/ui/label/label";
import { cn } from "@nova/utils/style-utils";
import { NovaNavItem, NovaNavSection } from "@nova/components/common/navigation";
import SidebarItem from "@nova/components/smart/sidebar/sidebar-item";

export const NOVA_SIDEBAR_EXPANDED_WIDTH_WITH_MARGINS = "w-[312px]";
export const NOVA_SIDEBAR_COLLAPSED_WIDTH = "w-0";
export const NOVA_SIDEBAR_DEFAULT_SELECTED_BACKGROUND = "bg-[#E5E7EB]";
export const NOVA_SIDEBAR_DEFAULT_HOVER_BACKGROUND = "hover:bg-[#E5E7EB]";

export type NovaSidebarProps = {
  navigationSections: Array<NovaNavSection>;
  width?: string;
  mustPrefetchLink?: boolean;
  children?: React.ReactNode;
};

const Sidebar = ({
                   navigationSections,
                   mustPrefetchLink = false,
                   children,
                 }: NovaSidebarProps) => {
  const isOpen = true;
  // Guard
  if (!navigationSections?.length) {
    return null;
  }

  return (
    <div className={cn("relative", isOpen ? "ml-[-13px] mr-[40px]" : "ml-0 mr-0")}>
      <div
        className={cn(
          "relative z-20 mt-[15px] flex flex-col transition-all duration-300 ease-in-out",
          isOpen
            ? `${NOVA_SIDEBAR_EXPANDED_WIDTH_WITH_MARGINS} opacity-100`
            : `${NOVA_SIDEBAR_COLLAPSED_WIDTH} opacity-0`,
        )}
      >
        <nav className={cn("bg-blue grid items-start")}>
          {navigationSections.map((section: NovaNavSection, index: number) => (
            <div key={index} className="pb-2">
              <Label className="h-[40px] pl-3">{section.label}</Label>
              <div className="py-3">
                {section.items.map((item: NovaNavItem, index: number) => (
                  <SidebarItem
                    key={index}
                    item={item}
                    index={index}
                    mustPrefetchLink={mustPrefetchLink}
                  />
                ))}
              </div>
            </div>
          ))}
          {/* Optional custom code */}
          {children}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
