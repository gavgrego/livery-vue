import { ref, type Ref } from "vue";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
  createColumnHelper,
  type ColumnDef,
} from "@tanstack/vue-table";

type Award = {
  date: string;
  lastSeen: string;
  origin: string;
  destination: string;
  economy: number;
  premium: number;
  business: number;
  first: number;
};

type UseDataTableProps<T> = {
  data: Ref<T[]>;
  columns: ColumnDef<T>[];
};

const useDataTable = <T>({
  data,
  columns,
}: UseDataTableProps<T>) => {
  const dataTable = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return {
    dataTable,
  };
};

// Example usage with Award data
const dummyAwardData = ref<Award[]>([
  {
    date: "2025-01-01",
    lastSeen: "2025-01-01",
    origin: "LAX",
    destination: "SFO",
    economy: 5000,
    premium: 10000,
    business: 20000,
    first: 35000,
  },
  {
    date: "2025-01-02",
    lastSeen: "2025-01-02",
    origin: "SFO",
    destination: "LAX",
    economy: 10000,
    premium: 30000,
    business: 4000,
    first: 56000,
  },
]);

const awardColumnHelper = createColumnHelper<Award>();

const awardColumns = [
  awardColumnHelper.accessor("date", {
    id: "date",
    header: "Date",
  }),
  awardColumnHelper.accessor("lastSeen", {
    id: "lastSeen",
    header: "Last Seen",
  }),
  awardColumnHelper.accessor("origin", {
    id: "origin",
    header: "Origin",
  }),
  awardColumnHelper.accessor("destination", {
    id: "destination",
    header: "Destination",
  }),
  awardColumnHelper.accessor("economy", {
    id: "economy",
    header: "Economy",
  }),
  awardColumnHelper.accessor("premium", {
    id: "premium",
    header: "Premium",
  }),
  awardColumnHelper.accessor("business", {
    id: "business",
    header: "Business",
  }),
  awardColumnHelper.accessor("first", {
    id: "first",
    header: "First",
  }),
];

export { useDataTable as default, dummyAwardData, awardColumns };
