<template>
  <div class="relative h-[920px]">
    <div>
      <img
        class="max-w-full w-screen h-[920px] object-cover"
        :src="imageUrl"
        alt="image description"
      />
    </div>
    <div class="section-container container mx-auto">
      <div
        class="absolute bottom-0  mb-20 items-center justify-center container mx-auto px-6 grid grid-cols-4 sm:grid-cols-12"
      >
        <div class="col-span-4 sm:col-span-6">
          <div v-if="imgActivate">
            <img src="/assets/images/imageflauta.png" alt="" />
          </div>
          <div class="text-left text-white mb-6 mr-8">
            <h1 class="text-4xl sm:text-7xl font-bold mb-4">{{ title }}</h1>
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
