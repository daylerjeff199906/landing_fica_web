<template>
  <div>
    <div class="flex flex-row items-center bg-black w-full h-[760px]">
      <div class="relative grid grid-cols-4 gap-4 container mx-auto">
        <LandingComponentsCardSocial
          v-for="(image, index) in imagesArray"
          :key="index"
          :url="image.url"
          :alt="image.alt"
        />
      </div>
      <div
        class="absolute bg-white w-[753px] h-[318px] p-12 m-40 flex flex-col justify-center"
      >
        <div class="text-4xl font-sans font-extrabold mb-6">
          SÍGUENOS EN NUESTRAS REDES SOCIALES
          <span class="text-[#9C174D]">#FICAIQUITOS</span>
        </div>
        <div class="justify-start">
          <a
            href="https://www.facebook.com/ficaiquitos"
            type="button"
            class="text-white font-mergeOne bg-[#1D4ED7] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <img
              src="/assets/images/bannerSocial/Facebook.png"
              alt=""
              class="mr-1"
            />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/fica_2023/"
            type="button"
            class="text-white font-mergeOne bg-[#F83C86] hover:bg-rose-900/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <img
              src="/assets/images/bannerSocial/instagram.png"
              alt=""
              class="mr-1"
            />
            Instagram
          </a>
          <a
            href="https://www.instagram.com/fica_2023/"
            type="button"
            class="text-white font-mergeOne bg-[#000000] hover:bg-slate-800/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <img
              src="/assets/images/bannerSocial/TikTok.png"
              alt=""
              class="mr-1"
            />
            Tik Tok
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imagesArray = [
  {
    url: "/assets/images/bannerSocial/img1.png",
    alt: "Imagen 1",
  },
  {
    url: "/assets/images/bannerSocial/img2.png",
    alt: "Imagen 2",
  },
  {
    url: "/assets/images/bannerSocial/img3.png",
    alt: "Imagen 3",
  },
  {
    url: "/assets/images/bannerSocial/img4.png",
    alt: "Imagen 4",
  },
  {
    url: "/assets/images/bannerSocial/img5.png",
    alt: "Imagen 5",
  },
  {
    url: "/assets/images/bannerSocial/img6.png",
    alt: "Imagen 6",
  },
  {
    url: "/assets/images/bannerSocial/img7.png",
    alt: "Imagen 7",
  },
  {
    url: "/assets/images/bannerSocial/img8.png",
    alt: "Imagen 8",
  },
];
</script>
