<template>
  <div>
    <div
      class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
    >
      <img :src="imageUrl" :alt="title" class="w-10 h-10 mx-auto mb-3" />
      <h5
        class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ data }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  data: String,
  imageUrl: String,
});
</script>
