import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "../components";

const meta = {
  title: "[02] Components/ConfirmationDialog",
  component: ConfirmationDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ConfirmationDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Click me</Button>,
    title: "Are you sure?",
    description: "This action cannot be undone.",
    onConfirm: () => alert("Confirmed"),
  },
  render: () => (
    <ConfirmationDialog trigger={<Button>Click me</Button>} title="Are you sure?"
                        description="This action cannot be undone."
                        onConfirm={() => alert("Confirmed")} isFullWidth={false} />
  ),
};

export const Customised: Story = {
  args: {
    trigger: <Button>Click me</Button>,
    title: "Are you sure?",
    description: "This action cannot be undone.",
    onConfirm: () => alert("Confirmed"),
  },
  render: () => (
    <ConfirmationDialog trigger={<Button>Click me</Button>} title="Are you sure?"
                        titleClassName="text-center text-sky-500"
                        descriptionClassName="text-center text-pink-500 pt-4"
                        confirmButtonClassName="bg-green-500 hover:bg-green-600"
                        cancelButtonClassName="text-white hover:text-white bg-red-500 hover:bg-red-600"
                        description="This is a customized version of the confirmation dialog"
                        onConfirm={() => alert("Confirmed")} isFullWidth={false} />
  ),
};
