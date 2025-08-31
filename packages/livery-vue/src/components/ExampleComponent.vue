<script setup lang="ts">
import { ref } from 'vue'

if (__DEV__) {
  console.log('[@gavgrego/livery-vue] creating ExampleComponent')
}

const msg = ref('Hello world!')
</script>

<template>
  <div class="outer border-1 border-solid border-green-700 p-5">
    <input v-model="msg" class="border-1 border-solid border-neutral-500 px-1 py-0.5">
    <p>{{ msg }}</p>
  </div>
</template>
