<template>
  <div class="bg-image">
    <div class="bg-black bg-opacity-40">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 section-container container mx-auto text-slate-50"
      >
        <div>
          <div class="text-4xl font-bold">
            ACCESO RÁPIDO Y ECOLÓGICO: DESCARGA EL CRONOGRAMA EN PDF EN TU
            CELULAR
          </div>
          <div class="text-base font-bold">
            Accede al cronograma del festival en formato PDF y tenlo siempre a
            mano en tu celular. Contribuye a la neutralidad de carbono, evitando
            el uso de papel y disfrutando de la programación del evento de forma
            eco-amigable.
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
  background-image: url("/assets/images/artista.png");
  background-size: cover;
  background-position: center;
}
</style>
