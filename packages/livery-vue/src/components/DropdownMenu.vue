<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  trigger: string;
};

const { trigger } = defineProps<Props>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>{{ trigger }}</DropdownMenuTrigger>
    <DropdownMenuContent>
      <slot name="header" v-if="$slots.header" />
      <DropdownMenuSeparator />
      <slot name="content" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
