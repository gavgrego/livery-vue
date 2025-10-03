import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import DataTable from "@/components/DataTable.vue";
import useDataTable from "@/composables/useDataTable";

type Person = {
  id: number;
  name: string;
  email: string;
  status: string;
};

const sampleData: Person[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active" },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    status: "Pending",
  },
];

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const meta = {
  title: "Components/DataTable",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: DataTable as any,
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const data = ref(sampleData);
      const table = useDataTable({ data, columns });
      return { table };
    },
    template: '<DataTable :table="table" />',
  }),
};

export const WithManyRows: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const data = ref(
        Array.from({ length: 25 }, (_, i) => ({
          id: i + 1,
          name: `Person ${i + 1}`,
          email: `person${i + 1}@example.com`,
          status: ["Active", "Inactive", "Pending"][i % 3],
        }))
      );
      const table = useDataTable({ data, columns });
      return { table };
    },
    template: '<DataTable :table="table" />',
  }),
};

export const Empty: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const data = ref([]);
      const table = useDataTable({ data, columns });
      return { table };
    },
    template: '<DataTable :table="table" />',
  }),
};
