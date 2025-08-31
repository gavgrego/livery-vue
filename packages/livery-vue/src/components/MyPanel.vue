<script setup lang="ts">
import { provide } from 'vue'
import MyPanelSection from './MyPanelSection.vue'

defineProps<{
  title?: string
  footer?: string
}>()

if (__DEV__) {
  provide('MyPanel', true)
}
</script>

<template>
  <div class="panel border-1 border-solid border-[#34495e] rounded-[5px] flex flex-col font-sans overflow-hidden [&>*+*]:border-t-1 [&>*+*]:border-t-solid [&>*+*]:border-t-[#34495e] [&>.panel-section:first-child]:rounded-t-[5px] [&>.panel-section:last-child]:rounded-b-[5px]">
    <slot name="header">
      <MyPanelSection v-if="title" class="panel-header bg-[#34495e] inset-ring inset-ring-white text-white tracking-wide text-shadow-sm">{{ title }}</MyPanelSection>
    </slot>
    <slot name="body">
      <MyPanelSection class="panel-body flex-auto overflow-auto">
        <slot />
      </MyPanelSection>
    </slot>
    <slot name="footer">
      <MyPanelSection v-if="footer" class="panel-footer bg-[#34495e] inset-ring inset-ring-white text-white tracking-wide text-shadow-sm">{{ footer }}</MyPanelSection>
    </slot>
  </div>
</template>
