import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import React from "react";

const meta = {
  title: "[02] Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">List</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Details</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Credentials</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const Separator: Story = {
  args: {},
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">List</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Details</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Credentials</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// -------------------------------------
// Responsive
// -------------------------------------

const StatefulBreadcrumbWrapper = ({
                                     // @ts-ignore
                                     children,
                                   }) => {
  const [open, setOpen] = React.useState(false);

  // Pass state and setState to children
  return children(open, setOpen);
};

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Building Your Application" },
  { href: "#", label: "Data Fetching" },
  { label: "Caching and Revalidating" },
];

const ITEMS_TO_DISPLAY = 3;

export const ResponsiveDesktop: Story = {
  args: {},
  render: () => (
    <StatefulBreadcrumbWrapper>
      {(open: boolean | undefined, setOpen: ((open: boolean) => void) | undefined) => (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={items[0]?.href}>{items[0]?.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {items?.length > ITEMS_TO_DISPLAY ? (
              <>
                <BreadcrumbItem>
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1"
                      aria-label="Toggle menu"
                    >
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {items.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <a href={item.href ? item.href : "#"}>{item?.label}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : null}
            {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
              <BreadcrumbItem key={index}>
                {item.href ? (
                  <>
                    <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                      <a href={item?.href}>{item?.label}</a>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                    {item?.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </StatefulBreadcrumbWrapper>
  ),
};

export const ResponsiveSmallDevices: Story = {
  args: {},
  render: () => (
    <StatefulBreadcrumbWrapper>
      {(open: boolean | undefined, setOpen: ((open: boolean) => void) | undefined) => (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={items[0]?.href}>{items[0]?.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {items?.length > ITEMS_TO_DISPLAY ? (
              <>
                <BreadcrumbItem>
                  <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger aria-label="Toggle Menu">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-left">
                        <DrawerTitle>Navigate to</DrawerTitle>
                        <DrawerDescription>
                          Select a page to navigate to.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="grid gap-1 px-4">
                        {items.slice(1, -2).map((item, index) => (
                          <a
                            key={index}
                            href={item.href ? item.href : "#"}
                            className="py-1 text-sm"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                      <DrawerFooter className="pt-4">
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : null}
            {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
              <BreadcrumbItem key={index}>
                {item.href ? (
                  <>
                    <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                      <a href={item.href}>{item.label}</a>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </StatefulBreadcrumbWrapper>
  ),
};
