<template>
  <div class="relative min-h-[830px]">
    <div class="min-h-[200px]">
      <img
        class="h-auto max-h-[1536px] min-h-[830px] object-cover max-w-full w-screen"
        src="/assets/images/imgbannerLanding.png"
        alt="image description"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-100 rounded-tl-2xl rounded-tr-2xl"
      ></div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 mb-60">
      <div class="text-center text-white mb-6">
        <h3 class="text-2xl font-bold font-roboto">
          XII Festival Internacional de la canción de la amazonía
        </h3>
        <h1 class="text-9xl font-bold">FICA</h1>
        <h3 class="text-4xl font-bold font-roboto">
          Del 21 al 23 de setiembre
        </h3>
        <h2 class="text-3xl font-bold font-roboto">Iquitos</h2>
      </div>
      <div class="text-center font-roboto space-x-4">
        <GeneralButtonGeneral label="VER CRONOGRAMA" />
        <GeneralButtonGeneral
          label="COMPRAR ENTRADAS"
          background-color="bg-pink-500"
          border-color="border-primary"
          hover-color="bg-pink-50"
          focus-color="bg-pink-50"
        />
      </div>
    </div>
  </div>
  <div class="relative">
    <div class="absolute w-full top-1/2 transform -translate-y-1/2 text-center">
      <LandingComponentsTimerComponent />
    </div>
  </div>
</template>
