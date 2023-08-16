<template>
  <div>
    <ViewsComponentsBannerDetails />
    <div class="section-container container mx-auto">
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-roboto font-bold">Artistas invitados</h1>
      </div>
      <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <GeneralCardGeneral
          v-for="singer in singers"
          :key="singer.id"
          :title="singer.name"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { singers } from "/storage/singers.js";
</script>
