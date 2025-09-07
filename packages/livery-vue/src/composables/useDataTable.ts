import { ref, type MaybeRef } from "vue";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/vue-table";

type UseDataTableProps<T> = {
  data: MaybeRef<T[]>;
  columns: ColumnDef<T>[];
};

const useDataTable = <T>({ data, columns }: UseDataTableProps<T>) => {
  const sorting = ref<SortingState>([]);

  const dataTable = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting.value,
    },
  });

  return {
    dataTable,
  };
};

export default useDataTable;
