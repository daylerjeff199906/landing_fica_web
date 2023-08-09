<template>
  <div
    class="w-auto h-auto sm:h-56 sm:w-auto bg-cyan-950 px-4 py-4 md:px-12 md:py-8 rounded-lg shadow justify-start items-center inline-flex mb-16"
    style="background-image: url('/assets/images/imgTimer.png')"
  >
    <div
      class="w-auto grid grid-cols-1 md:grid-cols-12 lg:w-[920px] justify-start items-center sm:gap-2.5"
    >
      <div class="col-span-4 text-center sm:text-left px-8 sm:p-1">
        <div class="text-slate-50 text-4xl font-bold mb-4">Faltan</div>
        <div class="text-slate-50 text-base font-normal">
          Experimenta el festival amazónico más intenso y emocionante.
        </div>
      </div>
      <div
        class="grow col-span-8 h-36 p-16 sm:p-4 justify-between items-center gap-1 lg:gap-8 flex"
      >
        <div
          class="sm:p-4 rounded-lg flex-col justify-start items-center inline-flex"
        >
          <div class="flex-col justify-start items-start gap-2.5 flex">
            <div class="text-white text-4xl sm:text-7xl font-bold">
              {{ days }}
            </div>
          </div>
          <div class="justify-start items-start gap-2.5 inline-flex">
            <div class="text-white text-lg font-bold">Días</div>
          </div>
        </div>
        <div
          class="p-4 rounded-lg flex-col justify-start items-center inline-flex"
        >
          <div class="flex-col justify-start items-start gap-2.5 flex">
            <div class="text-white text-4xl sm:text-7xl font-bold">
              {{ hours }}
            </div>
          </div>
          <div class="justify-start items-start gap-2.5 inline-flex">
            <div class="text-white text-lg font-bold">Hrs.</div>
          </div>
        </div>
        <div
          class="p-4 rounded-lg flex-col justify-start items-center inline-flex"
        >
          <div class="flex-col justify-start items-start gap-2.5 flex">
            <div class="text-white text-4xl sm:text-7xl font-bold">
              {{ minutes }}
            </div>
          </div>
          <div class="justify-start items-start gap-2.5 inline-flex">
            <div class="text-white text-lg font-bold">Min.</div>
          </div>
        </div>
        <div
          class="p-4 rounded-lg flex-col justify-start items-center inline-flex"
        >
          <div class="flex-col justify-start items-start gap-2.5 flex">
            <div class="text-white text-4xl sm:text-7xl font-bold">
              {{ seconds }}
            </div>
          </div>
          <div class="justify-start items-start gap-2.5 inline-flex">
            <div class="text-white text-lg font-bold">Seg.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Fecha objetivo (Ajusta la fecha a la que desees que termine la cuenta regresiva)
const targetDate = new Date("2023-09-21T23:59:59").getTime();

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

function calculateTimeRemaining() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    days.value = formatTimeValue(daysRemaining);
    hours.value = formatTimeValue(hoursRemaining);
    minutes.value = formatTimeValue(minutesRemaining);
    seconds.value = formatTimeValue(secondsRemaining);
  } else {
    // Si el tiempo restante es menor o igual a cero, puedes mostrar un mensaje de finalizado o hacer algo más.
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
  }
}

function formatTimeValue(value) {
  // Función auxiliar para formatear el valor de tiempo agregando un 0 si es menor que 10.
  return value < 10 ? `0${value}` : value;
}

// Calcula el tiempo restante al montar el componente y actualiza periódicamente cada segundo.
onMounted(() => {
  calculateTimeRemaining();
  setInterval(calculateTimeRemaining, 1000);
});

// Limpia el intervalo al desmontar el componente.
onUnmounted(() => {
  clearInterval(calculateTimeRemaining);
});
</script>
