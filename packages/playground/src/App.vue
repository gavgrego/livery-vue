<script setup lang="ts">
import { Button, Progress, DropdownMenu } from "@gavgrego/livery-vue";
import { ref } from "vue";

const progress = ref(50);

setInterval(() => {
  progress.value += 10;

  if (progress.value > 100) {
    progress.value = 0;
  }
}, 1000);
</script>

<template>
  <div class="main flex flex-col max-w-75 gap-2.5 m-2.5">
    <h3 class="text-xl font-bold">Button</h3>
    <Button title="Button">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="default" size="sm">Small</Button>
    <Button variant="default" size="lg">Large</Button>
    <Button variant="default" size="icon">Icon</Button>
    <h3 class="text-xl font-bold">Progress</h3>
    <Progress :model-value="progress" />
    <h3 class="text-xl font-bold">DropdownMenu</h3>
    <DropdownMenu trigger="Open">
      <template #header>
        <h3>Header</h3>
      </template>
      <template #content>
        <h3>Content</h3>
      </template>
    </DropdownMenu>
  </div>
</template>
