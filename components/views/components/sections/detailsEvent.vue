<template>
  <div class="bg-black pb-24">
    <div class="bg-slate-50 relative mx-4 sm:mx-40">
      <div class="section-container container mx-auto">
        <div class="grid grid-cols-4 sm:grid-cols-12">
          <div class="col-span-4 sm:col-span-6">
            <div class="text-2xl font-bold">Titulo</div>
            <div>
              La 2da. fecha del Concurso de Bandas ha llegado a su fin y ha sido
              un verdadero espectáculo de talento musical. Queremos compartir
              con ustedes las 3 bandas clasificadas, donde cada banda ha dado lo
              mejor de sí. Pero esto no es todo. La gran final del Concurso de
              Bandas está a la vuelta de la esquina y promete ser un evento
              inolvidable. Te invitamos a que nos acompañes este 3 de Junio para
              presenciar el enfrentamiento épico de las mejores Bandas del
              Concurso. ¡No faltes y vive una experiencia única!
            </div>
            <div>Detalles</div>
            <div>Fecha: 20 de setiembre 2023</div>
            <div>Hora: 10:00 pm</div>
            <div>Lugar: Estadio Max Agustin</div>
          </div>
          <div class="col-span-4 sm:col-span-6">
            <img src="/assets/images/img2.jpg" alt="image description" />
          </div>
        </div>
      </div>
      <div class="section-container container mx-auto my-15">
        <div>
          <div class="text-2xl font-bold mb-6">
            Revive los mejores momentos del FICA
          </div>
          <div class="w-full px-4 sm:px-24">
            <iframe
              class="w-full"
              height="650"
              src="https://www.youtube.com/embed/qaI36twEFwY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="section-container container mx-auto my-15">
        <div>
          <div class="text-2xl font-bold mb-6">Carrusel de imágenes</div>
          <div class="w-full px-4 sm:px-24">
            <div
              id="default-carousel"
              class="relative w-full"
              data-carousel="slide"
            >
              <!-- Carousel wrapper -->
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/docs/images/carousel/carousel-1.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/docs/images/carousel/carousel-2.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/docs/images/carousel/carousel-3.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/docs/images/carousel/carousel-4.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 5 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src="/docs/images/carousel/carousel-5.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <!-- Slider indicators -->
              <div
                class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
              >
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <!-- Slider controls -->
              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
