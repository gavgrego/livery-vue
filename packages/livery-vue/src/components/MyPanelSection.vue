<script setup lang="ts">
import { inject, provide } from 'vue'

if (__DEV__) {
  const insideMyPanel = inject('MyPanel', false)

  if (!insideMyPanel) {
    console.warn('[@gavgrego/livery-vue] MyPanelSection can only be used inside MyPanel')
  }

  provide('MyPanel', false)
}
</script>

<template>
  <div class="panel-section p-2">
    <slot />
  </div>
</template>
