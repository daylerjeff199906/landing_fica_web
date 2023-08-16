<template>
  <div class="bg-image">
    <div class="bg-black bg-opacity-40">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 section-container container mx-auto text-slate-50"
      >
        <div>
          <div class="text-7xl font-bold">CUIDA TU ENTORNO</div>
          <div class="text-base font-medium">
            DESCARGA EL CRONOGRAMA EN PDF EN TU CELULAR. Contribuye a la
            neutralidad de carbono, evitando el uso de papel y disfrutando de la
            programación del evento de forma eco-amigable.
          </div>
        </div>
        <div class="flex items-center justify-center">
          <GeneralButtonGeneral
            label="DESCARGAR CRONOGRAMA"
            border-color="#ffffff"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url("/assets/images/imgBanners/banner_download.jpg");
  background-size: cover;
  background-position: center;
}
</style>
