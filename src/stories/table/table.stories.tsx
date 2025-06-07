import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableExample from "./table-example";
import tasks from "./tasks/data/tasks.json";
import { columns } from "./tasks/components/columns";
import { DataTable } from "./tasks/components/data-table";

const meta = {
  title: "[02] Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$125.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">€125.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const AdvancedTable: Story = {
  args: {},
  render: () => <TableExample />,
};

export const MoreAdvancedTable: Story = {
  args: {},
  render: () => (
    <>
      <div className="md:hidden">
        <image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden w-full h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  ),
};
