<script setup lang="ts">
import { Button } from "@gavgrego/livery-vue";
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
  </div>
</template>
