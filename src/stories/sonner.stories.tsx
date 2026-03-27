import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster, toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const meta = {
  title: "[02] Components/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.success("Successfully saved!")}
      >
        Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.error("Something went wrong.")}
      >
        Error Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.info("Here is some information.")}
      >
        Info Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.warning("Please be careful!")}
      >
        Warning Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast with Action
      </Button>
    </div>
  ),
};

