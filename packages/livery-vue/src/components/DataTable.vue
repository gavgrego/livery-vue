<script setup lang="ts" generic="T">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FlexRender, type Table as TTable } from "@tanstack/vue-table";

type DataTableProps<T> = {
  table: TTable<T>;
};

const { table } = defineProps<DataTableProps<T>>();
</script>

<template>
  <div>
    <Table>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
          /></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
          <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id"
            ><FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
          /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
