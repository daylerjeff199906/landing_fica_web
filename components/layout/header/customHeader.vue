<template>
  <nav
    class="fixed top-0 left-0 right-0 z-10 transition-colors duration-300 bg-black px-4 sm:px-0"
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
                :class="{
                  'text-white font-bold font-roboto hover:bg-lime-600 hover:text-white rounded-md px-3 py-2 text-base': true,
                  'bg-fuchsia-500 font-extrabold': option.route === $route.path,
                }"
                :aria-current="option.route === $route.path ? 'page' : null"
              >
                {{ option.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="absolute hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
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
        <div class="sm:hidden" @click="toggleMenu">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="" v-if="isMenuOpen">
      <LayoutHeaderMenu :close-menu="toggleMenu" />
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

import { onMounted, onUnmounted, reactive, ref } from "vue";

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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
