<template>
  <div class="flex font-roboto w-full">
    <div>
      <img
        :src="urlImage"
        alt="imgEvento.jpg"
        class="w-[270px] h-full object-cover"
      />
    </div>
    <div
      class="text-slate-50 w-full container p-4 bg-black bg-opacity-50 hover:bg-opacity-90 transition duration-300 ease-in-out"
    >
      <div class="text-base font-normal mb-1 truncate">{{ date }}</div>
      <div class="text-2xl font-bold line-clamp-1">{{ title }}</div>
      <div class="text-base font-medium mt-3 line-clamp-2">
        {{ description }}
      </div>
      <div class="flex mt-1">
        <div class="mr-2">{{ time }}</div>
        <div>{{ location }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { date, title, description, time, location, urlImage } = defineProps([
  "date",
  "title",
  "description",
  "time",
  "location",
  "urlImage",
]);
</script>
