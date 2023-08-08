<template>
  <div>
    <div class="w-auto ">
      <img :src="url" :alt="alt" />
    </div>
  </div>
</template>

<script setup>
const { url, alt } = defineProps(["url", "alt"]);
</script>
