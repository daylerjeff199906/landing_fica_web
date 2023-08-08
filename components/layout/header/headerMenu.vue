<template>
  <div
    class="flex items-center justify-center absolute z-30 left-0 h-fit mt-60 rounded-r-full bg-black bg-opacity-50 w-1/2"
  >
    <div class="">
      <button
        class="bg-black text-slate-50 p-2 rounded-full"
        @click="closeMenu"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <ul class="text-center font-bold">
      <li>
        <NuxtLink to="/" active-class="text-epg line-clamp-2 underline"
          >Inicio</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/about" active-class="text-epg line-clamp-2 underline"
          >Sobre FICA</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/events" active-class="text-epg line-clamp-2 underline"
          >Eventos</NuxtLink
        >
      </li>

      <li>
        <NuxtLink to="/contact" active-class="text-epg line-clamp-2 underline"
          >Participa</NuxtLink
        >
      </li>

      <li>
        <NuxtLink to="/moreInfo" active-class="text-epg line-clamp-2 underline"
          >Únete a nosotros</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 20px;
  color: white;
  list-style: none;
}

li {
  margin-bottom: 10px;
}
</style>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  closeMenu: Function, // Prop para recibir el método de cierre desde el componente padre
});
</script>
