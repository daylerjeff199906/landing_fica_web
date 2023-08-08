<template>
  <button>
    <div
      class="h-fit w-fit flex-col justify-end items-end inline-flex overflow-hidden group"
    >
      <div class="relative w-full">
        <img
          src="/assets/images/artista.png"
          alt=""
          class="h-[420px] w-full transform transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        ></div>
      </div>
      <div
        class="absolute w-80 self-stretch grow shrink basis-0 p-6 flex-col justify-end items-end gap-4 flex"
      >
        <div class="self-stretch justify-start items-start gap-4 inline-flex">
          <div class="w-1.5 self-stretch bg-lime-600"></div>
          <div class="w-fit text-gray-50 text-xl font-bold">CARLOS VIVES</div>
        </div>
        <div class="text-base font-normal text-slate-50 self-stretch inline-flex text-left">
          Conciertos, talleres, danza y más, el FICA despierta tus sentidos.
        </div>
      </div>
    </div>
  </button>
</template>
