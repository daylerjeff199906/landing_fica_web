<template>
  <div class="bg-image">
    <div class="bg-black bg-opacity-30">
      <div class="section-container container mx-auto">
        <div class="text-2xl mb-3 font-roboto font-bold text-slate-50">
          Nuestros eventos
        </div>
        <div class="grid grid-cols-4 lg:grid-cols-12 gap-6">
          <div class="col-span-4 sm:col-span-7">
            <div class="text-slate-50 bg-black bg-opacity-60">
              <img
                src="/assets/images/esenarioEvento.jpg"
                alt=""
                class="bg-slate-400 h-[450px] w-full object-cover"
              />
              <div class="px-6 py-4">
                <div class="text-lg mb-3">21, 22 y 23 SET 2023</div>
                <div class="text-2xl font-bold mb-3 font-roboto">
                  Viene el FICA este 21, 22 y 23 de setiembre con presencia de
                  Artistas Internacionales y Nacionales
                </div>
                <div class="text-base font-medium font-roboto">
                  Pronto daremos a conocer, el FICA es de todos por ello
                  tendremos entrada populares desde S/25.00 al alcance de todo
                  bolsillo. Atentos a las próximas semanas que lanzaremos los
                  artistas que nos acompañaran en las galas del Festival.
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-span-4 sm:col-span-5 divide-y-2 divide-gray-200 dark:text-white dark:divide-gray-700 space-y-2"
          >
            <LandingComponentsCardListEvent
              date="SÁB, 03 JUN 2023"
              title="Final del I Concurso de Bandas FICA 2023"
              description="Va quedando todo listo para la Final del I Concurso de Bandas FICA 2023... Los esperamos desde las 4 pm en MR PARDO"
              time="00:00 pm"
              location="calle lorem ipsus 664"
              urlImage="/assets/images/img1.jpg"
            />

            <LandingComponentsCardListEvent
              class="pt-2"
              date="VIR, 28 MAY 2023"
              title="La 2da. fecha del Concurso de Bandas"
              description="Queremos compartir con ustedes las 3 bandas clasificadas, donde cada banda ha dado lo mejor de sí."
              time="00:00 pm"
              location="calle lorem ipsus 664"
              urlImage="/assets/images/img2.jpg"
            />

            <LandingComponentsCardListEvent
              class="pt-2"
              date="SÁB, 03 JUN 2023"
              title="Final del I Concurso de Bandas FICA 2023"
              description="Va quedando todo listo para la Final del I Concurso de Bandas FICA 2023... Los esperamos desde las 4 pm en MR PARDO"
              time="00:00 pm"
              location="calle lorem ipsus 664"
              urlImage="/assets/images/chicaCantando.jpg"
            />
            <div class="text-center gap-8 pt-6">
              <GeneralButtonGeneral label="VER CRONOGRAMA" />
              <GeneralButtonGeneral
                label="COMPRAR ENTRADA"
                border-color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url("/assets/images/luces_verde.jpg");
  background-size: cover;
  background-position: start;
}
</style>
