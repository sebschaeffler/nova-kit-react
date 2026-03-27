import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Search, Mail, Copy } from "lucide-react";

const meta = {
  title: "[02] Components/Input Group",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" />
      </InputGroup>
    </div>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter amount" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupInput placeholder="Copy this text" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost" size="icon-xs">
            <Copy className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupAddon align="inline-start">https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">.com</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};


