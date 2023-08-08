<template>
  <NuxtLink :to="linkUrl">
    <button
      class="text-base font-roboto font-bold text-cerisered hover:text-slate-500 focus:text-rose-700"
    >
      {{ label }}
    </button>
  </NuxtLink>
</template>

<script setup>
const { label, linkUrl } = defineProps(["label", "linkUrl"]);
</script>
