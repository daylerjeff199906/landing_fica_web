<template>
  <div class="relative w-full">
    <!-- Navbar -->
    <div class="navbar z-50">
      <!-- Ajusta el z-index aquí -->
      <!-- Contenido del navbar -->
    </div>

    <!-- Carousel -->
    <div
      id="default-carousel"
      class="carousel-backdrop w-full "
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-96 overflow-hidden md:h-[720px] lg:h-[720px]">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            :src="image"
            class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          class="w-3 h-3 rounded-full"
          :aria-current="index === 0"
          :aria-label="`Slide ${index + 1}`"
          :data-carousel-slide-to="index"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <!-- Código del botón previo -->
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <!-- Código del botón siguiente -->
      </button>
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

<style scoped>
.carousel-backdrop {
  position: relative;
  z-index: 0; /* Ajusta el z-index aquí */
}
</style>
