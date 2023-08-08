<template>
  <div class="relative">
    <div>
      <img
        class="h-full max-w-full w-screen max-h-[1536px]"
        :src="imageUrl"
        alt="image description"
      />
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 mb-20 flex items-center justify-center container mx-auto px-6"
    >
      <div v-if="imgActivate">
        <img src="/assets/images/imageflauta.png" alt="" />
      </div>
      <div class="text-left text-white mb-6 mr-8">
        <h1 class="text-6xl font-bold">{{ title }}</h1>
        <h3 class="text-2xl font-bold">{{ description }}</h3>
      </div>
      <div v-if="cardActivate">
        <GeneralCardBanner 
        :label-bleft="labelBleft"
        :label-brigth="labelBrigth"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { imageUrl, title, description, imgActivate, cardActivate, labelBrigth, labelBleft } = defineProps(
  ["imageUrl", "title", "description", "imgActivate", "cardActivate","labelBrigth","labelBleft"]
);
</script>
