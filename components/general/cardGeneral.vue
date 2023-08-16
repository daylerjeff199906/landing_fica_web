<template>
  <button>
    <div
      class="h-fit w-fit flex-col justify-center items-center inline-flex overflow-hidden group"
    >
      <div class="relative w-full">
        <img
          :src="imageUrl"
          alt=""
          class="h-[420px] w-full transform transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></div>
      </div>
      <div
        class="absolute w-auto self-stretch grow shrink basis-0 p-6 flex-col justify-center items-center gap-4 flex"
      >
        <div class="self-stretch justify-start items-start gap-4 inline-flex">
          <div class="w-1.5 self-stretch bg-lime-600"></div>
          <div class="w-fit text-gray-50 text-2xl font-bold">{{ title }}</div>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup>
defineProps({
  imageUrl: {
    type: String,
    default: "/assets/images/artista.png",
  },
  title: {
    type: String,
    default: "Nombre artista",
  },
  id: {
    type: String,
    required: true,
  },
});
</script>
