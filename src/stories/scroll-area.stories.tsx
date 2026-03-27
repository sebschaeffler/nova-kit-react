import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "[02] Components/Scroll Area",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="flex h-36 w-48 items-center justify-center overflow-hidden rounded-md bg-muted">
              <span className="text-2xl font-semibold text-muted-foreground">
                {i + 1}
              </span>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

