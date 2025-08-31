<script setup lang="ts">
type Props = {
  title: string;
};

const props = defineProps<Props>();

console.log(props);
</script>

<template>
  <button>
    <slot />
  </button>
</template>
