<template>
  <div id="default-carousel" class="relative mx-auto" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-[100vh] overflow-hidden">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="hidden duration-700 ease-in-out"
        data-carousel-item
      >
        <img :src="image" class="absolute block w-full h-full" alt="..." />
      </div>
    </div>

    <div
      class="top-0  flex flex-col items-center justify-center h-full w-full px-10 bg-black/50 dark:bg-gray-900/50"
    >
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-4 h-4 rounded-full sm:w-6 sm:h-6 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 text-white sm:w-4 sm:h-4 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-6 sm:h-6 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 text-white sm:w-4 sm:h-4 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>

      <div class="grid grid-cols-12">
        <div class="col-start-6 col-span-6 font-roboto">
          <h1 class="text-white font-bold text-4xl mb-6">
            Festival amazónico más grande de la Selva
          </h1>
          <h1 class="text-white text-base mb-6">
            Es el evento musical más reconocido en la selva peruana, en el Perú
            y el mundo, es el festival más esperado de los últimos tiempos.
            Reúne en la ciudad emblema del Amazonas.
          </h1>
          <h1 class="text-white text-3xl font-medium">“Vive la melodía en este festival sin igual”</h1>
        </div>
      </div>
      <!-- <div class="flex items-center justify-center">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Green
        </button>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const images = [
  "/assets/images/carousel/ImgCarousel1.png",
  "/assets/images/carousel/ImgCarousel2.png",
  "/assets/images/carousel/ImgCarousel3.png",
];
</script>
