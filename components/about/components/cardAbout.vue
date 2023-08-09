<template>
  <div
    class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex gap-2 "
  >
    <div>
        <img :src="iconUrl" alt="icon.svg" class="w-24">
    </div>
    <div>
      <h5
        class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
});
</script>
