<template>
  <div
    class="px-6 py-12 border border-slate-50 bg-black bg-opacity-40 text-center rounded-xl w-[520px]"
  >
    <div class="text-4xl font-roboto font-extrabold text-slate-50 mb-6">
      Compra tus entradas
    </div>
    <div class="text-xl font-roboto font-bold text-slate-50 mb-6">
      Desde el 20 de setiembre hasta 23 de setiembre
    </div>
    <div class="">
      <GeneralButtonGeneral :label="labelBleft" border-color="slate-50" link="/events" />
      <GeneralButtonGeneral
        :label="labelBrigth"
        background-color="bg-primary"
        border-color="border-primary"
        hovercolor="black"
        focus-color="black"
      />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const { labelBrigth, labelBleft } = defineProps(["labelBrigth", "labelBleft"]);
</script>
