<template>
  <div>
    <button>
      <NuxtLink to="/events/1">
        <div class="w-fit my-6">
          <div class="relative overflow-auto group rounded-lg">
            <img
              class="h-80 w-fit object-cover rounded-lg transition-transform transform-gpu group-hover:-translate-y-4"
              src="/assets/images/artista.png"
              alt="imagesEventos"
            />
          </div>
          <div class="text-center mt-4">
            <div class="text-xl font-roboto font-bold">Nombre de actividad</div>
            <div class="text-xl font-roboto font-bold">
              05/06/2023 a las 10:30
            </div>
          </div>
        </div>
      </NuxtLink>
    </button>
  </div>
</template>
