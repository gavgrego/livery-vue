<script setup lang="ts" generic="T">
import { computed, watch } from "vue";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type Table as TTable } from "@tanstack/vue-table";

type DataTableProps<T> = {
  table: TTable<T>;
};

const { table } = defineProps<DataTableProps<T>>();

const paginationState = computed(() => table.getState().pagination);

const currentPage = computed(() => paginationState.value.pageIndex + 1);
const itemsPerPage = computed(() =>
  Math.max(1, paginationState.value.pageSize ?? 0)
);
const totalItems = computed(() => table.getFilteredRowModel().rows.length ?? 0);
const pageCount = computed(() => table.getPageCount());
const showPagination = computed(() => pageCount.value > 1);

const handlePageChange = (page: number) => {
  const nextPage = Math.max(1, page);
  const safePage = Math.min(nextPage, pageCount.value || 1);
  table.setPageIndex(safePage - 1);
};

watch(
  pageCount,
  (count) => {
    const lastPageIndex = count > 0 ? count - 1 : 0;
    const currentIndex = table.getState().pagination.pageIndex;

    if (currentIndex > lastPageIndex) {
      table.setPageIndex(lastPageIndex);
    }
  },
  { immediate: true }
);
</script>

<template>
  <Pagination
    v-if="showPagination"
    :page="currentPage"
    :items-per-page="itemsPerPage"
    :total="totalItems"
    :sibling-count="1"
    @update:page="handlePageChange"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />

      <template
        v-for="(item, index) in items"
        :key="item.type === 'page' ? `page-${item.value}` : `ellipsis-${index}`"
      >
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === currentPage"
        >
          {{ item.value }}
        </PaginationItem>

        <PaginationEllipsis v-else />
      </template>

      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>
