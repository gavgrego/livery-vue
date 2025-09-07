import { ref, type Ref } from "vue";
import { useDataTable } from "@gavgrego/livery-vue";
import { createColumnHelper, type ColumnDef } from "@tanstack/vue-table";

type Award = {
  id: number;
  lastSeen: string;
  origin: string;
  destination: string;
  economy: number;
  premium: number;
  business: number;
  first: number;
};

const data: Ref<Award[]> = ref([
  {
    id: 1,
    lastSeen: "2021-01-01",
    origin: "LAX",
    destination: "SFO",
    economy: 100,
    premium: 200,
    business: 300,
    first: 400,
  },
  {
    id: 2,
    lastSeen: "2021-01-02",
    origin: "LAX",
    destination: "SFO",
    economy: 100,
    premium: 200,
    business: 300,
    first: 400,
  },
]);

const columnHelper = createColumnHelper<Award>();

const columns: ColumnDef<Award>[] = [
  columnHelper.group({
    header: "Award",
    columns: [
      columnHelper.accessor("id", {
        header: "ID",
        cell: ({ row }) => row.original.id,
      }),
      columnHelper.accessor("lastSeen", {
        header: "Last Seen",
        cell: ({ row }) => row.original.lastSeen,
      }),
      columnHelper.accessor("origin", {
        header: "Origin",
        cell: ({ row }) => row.original.origin,
      }),
      columnHelper.accessor("destination", {
        header: "Destination",
        cell: ({ row }) => row.original.destination,
      }),
      columnHelper.accessor("economy", {
        header: "Economy",
        cell: ({ row }) => row.original.economy,
      }),
      columnHelper.accessor("premium", {
        header: "Premium",
        cell: ({ row }) => row.original.premium,
      }),
      columnHelper.accessor("business", {
        header: "Business",
        cell: ({ row }) => row.original.business,
      }),
      columnHelper.accessor("first", {
        header: "First",
        cell: ({ row }) => row.original.first,
      }),
    ],
  }),
];

const useSearchTable = () => {
  const dataTable = useDataTable({
    data,
    columns,
  });

  return {
    dataTable,
  };
};

export default useSearchTable;
