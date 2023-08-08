<template>
  <div>
    <div class=" md:h-[792px] bg-black">
      <div class="section-container container mx-auto">
        <div class="text-2xl mb-3 font-roboto font-bold text-slate-50">
          Nuestros eventos
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <div class="col-span-8">
            <div class="text-slate-50">
              <img
                src="/assets/images/esenarioEvento.jpg"
                alt=""
                class="bg-slate-400 h-[450px] w-full object-cover"
              />
              <div class="text-lg mt-4 mb-3">21, 22 y 23 SET 2023</div>
              <div class="text-2xl font-bold mb-3">
                Viene el FICA este 21, 22 y 23 de setiembre con presencia de
                Artistas Internacionales y Nacionales
              </div>
              <div class="text-base font-medium">
                Pronto daremos a conocer, el FICA es de todos por ello tendremos
                entrada populares desde S/25.00 al alcance de todo bolsillo.
                Atentos a las próximas semanas que lanzaremos los artistas que
                nos acompañaran en las galas del Festival.
              </div>
            </div>
          </div>
          <div
            class="col-span-4 max-w-md divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
          >
            <LandingComponentsCardListEvent />
            <LandingComponentsCardListEvent />
            <LandingComponentsCardListEvent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
