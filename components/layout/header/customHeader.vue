<template>
  <nav
    class="fixed top-0 left-0 right-0 z-10  transition-colors duration-300 bg-black"
  :class="state.isScrolled ? 'bg-black' : 'bg-opacity-20'"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-shrink-0 items-center">
          <img
            class="block h-8 w-auto lg:hidden"
            src="/assets/images/logoFica.png"
            alt="LOGOFICA"
          />
          <img
            class="hidden h-8 w-auto lg:block"
            src="/assets/images/logoFica.png"
            alt="LOGOFICA"
          />
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch">
          <div class="hidden sm:ml-6 sm:block items-center justify-center">
            <div class="flex space-x-4 items-center">
              <NuxtLink
                v-for="option in menuOptions"
                :key="option.route"
                :to="option.route"
                class="text-white font-bold font-roboto  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base"
                :aria-current="option.route === $route.path ? 'page' : null"
              >
                {{ option.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="rounded-md p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              class="h-8 w-8 rounded-md"
              src="/assets/images/tiktok.png"
              alt=""
            />
          </button>
          <button
            type="button"
            class="rounded-md p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              class="h-8 w-8 rounded-md"
              src="/assets/images/facebook.png"
              alt=""
            />
          </button>
          <button
            type="button"
            class="rounded-md p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              class="h-8 w-8 rounded-md"
              src="/assets/images/Instagram.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuOptions = [
  { route: "/", name: "Inicio" },
  { route: "/about", name: "Sobre FICA" },
  { route: "/events", name: "Eventos" },
  { route: "/moreInfo", name: "Participa" },
  { route: "/contact", name: "Únete a nosotros" },
];

import { onMounted, onUnmounted, reactive } from "vue";

const state = reactive({
  isScrolled: false,
});

const scrollThreshold = 100; // Altura del scroll en píxeles para cambiar el fondo

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  state.isScrolled = scrollTop > scrollThreshold;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
