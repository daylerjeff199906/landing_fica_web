<template>
  <div class="relative h-[920px]">
    <div class="">
      <img
        class="max-w-full w-screen h-[920px] object-cover"
        :src="imageUrl"
        alt="image description"
      />
    </div>
    <div class="sm:section-container container mx-auto">
      <div
        class="absolute bottom-0 grid grid-cols-4 sm:grid-cols-12 mb-20 items-center justify-center container mx-auto px-4 sm:px-14"
      >
        <div class="flex col-span-4 sm:col-span-6">
          <div v-if="imgActivate" class="col-span-4">
            <img src="/assets/images/imageflauta.png" alt="" />
          </div>
          <div class="text-left text-white mb-6 mr-8 col-span-8">
            <h1 class="text-4xl sm:text-7xl font-bold mb-4 uppercase">{{ title }}</h1>
            <h3 class="text-base sm:text-2xl font-bold">{{ description }}</h3>
          </div>
        </div>
        <div
          v-if="cardActivate"
          class="col-span-4 sm:col-span-6 flex items-center justify-center"
        >
          <GeneralCardBanner
            :label-bleft="labelBleft"
            :label-brigth="labelBrigth"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const {
  imageUrl,
  title,
  description,
  imgActivate,
  cardActivate,
  labelBrigth,
  labelBleft,
} = defineProps([
  "imageUrl",
  "title",
  "description",
  "imgActivate",
  "cardActivate",
  "labelBrigth",
  "labelBleft",
]);
</script>
