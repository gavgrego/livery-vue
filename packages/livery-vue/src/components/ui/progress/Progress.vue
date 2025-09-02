<script setup lang="ts">
import type { ProgressRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ProgressIndicator, ProgressRoot } from "reka-ui";
import { cn } from "@/lib/utils";

const {
  modelValue,
  class: className,
  ...delegatedProps
} = defineProps<ProgressRootProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ProgressRoot
    data-slot="progress"
    v-bind="delegatedProps"
    :class="
      cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className
      )
    "
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      class="bg-primary h-full w-full flex-1 transition-all"
      :style="`transform: translateX(-${100 - (modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
