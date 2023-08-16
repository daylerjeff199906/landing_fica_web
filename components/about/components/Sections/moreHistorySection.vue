<template>
  <div>
    <div class="section-container">
      <div class="text-center mb-6">
        <div class="text-3xl font-bold font-roboto mb-4">Trayectoria</div>
        <div class="text-base">
          A lo largo de 10 ediciones: El FICA se convierte en un catalizador
          económico, impulsando el turismo y fortaleciendo la identidad
          amazónica.
        </div>
      </div>
      <div class="grid grid-cols-4 sm:grid-cols-12">
        <div class="col-span-4 sm:col-span-6">
          <img
            src="/assets/images/trayectoria_fica.jpg"
            alt="conferencia"
            class="p-10"
          />
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li
                v-for="(item, index) in timelineItems"
                :key="index"
                class="mb-8 ml-4"
              >
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                  >{{ item.year }}</time
                >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ item.title }}
                </h3>
                <p
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  {{ item.description }}
                </p>
              </li>
            </ol>
          </div>
          <div class="text-base">
            Impulsado por líderes visionarios: Empresarios destacados, artistas
            talentosos y entusiastas vecinos de Iquitos, liderados por José
            Silfo Alván Del Castillo, ex alcalde de Maynas, dan vida a uno de
            los eventos más ambiciosos de todos los tiempos.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        {
          year: "February 1979",
          title: "Comienzos del fica",
          description:
            "Nace el Festival Internacional de la Canción de la Amazonía (FICA), despertando la pasión de los amantes de la música en Loreto.",
        },
        {
          year: "March 1984",
          title: "Renombre del FICA",
          description:
            "Tras superar las expectativas del público, el FICA se consolida como un evento de renombre en la región amazónica.",
        },
        {
          year: "April 1989",
          title: "Resurgimiento del FICA",
          description:
            "El FICA experimenta un resurgimiento, cautivando nuevamente a la comunidad iquiteña y reafirmando su posición como un éxito rotundo.",
        },
      ],
    };
  },
};
</script>
