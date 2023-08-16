<template>
  <NuxtLink :to="link">
    <button
      :class="`relative inline-flex items-center justify-center  p-0.5 mb-2 mr-2 overflow-hidden font-roboto text-base font-bold text-slate-50 rounded-lg  ${backgroundColor} border-2 ${borderColor}  hover:${hoverColor} focus:${focusColor}`"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0"
      >
        {{ label }}
      </span>
    </button>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";

const { label, link, backgroundColor, borderColor, hoverColor, focusColor } =
  defineProps({
    label: {
      type: String,
      required: true,
      default: "Button",
    },
    link: {
      type: String,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "bg-black",
    },
    borderColor: {
      type: String,
      required: false,
      default: "border-cerisered",
    },
    hoverColor: {
      type: String,
      required: false,
      default: "bg-rose-700",
    },
    focusColor: {
      type: String,
      required: false,
      default: "bg-pink-500",
    },
  });
</script>
