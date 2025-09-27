import { ref, type Ref } from "vue";
import { useDataTable } from "@gavgrego/livery-vue";
import { createColumnHelper, type ColumnDef } from "@tanstack/vue-table";
import { faker } from "@faker-js/faker";

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

const generateAward = (id: number): Award => {
  const departure = faker.airline.airport();
  const arrival = faker.airline.airport();

  return {
    id,
    lastSeen: faker.date.recent({ days: 365 }).toISOString().split("T")[0],
    origin: departure.iataCode,
    destination: arrival.iataCode,
    economy: faker.number.int({ min: 50, max: 1200 }),
    premium: faker.number.int({ min: 75, max: 2000 }),
    business: faker.number.int({ min: 100, max: 3000 }),
    first: faker.number.int({ min: 150, max: 5000 }),
  };
};

const data: Ref<Award[]> = ref(
  Array.from({ length: 239 }, (_, index) => generateAward(index + 1))
);

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
