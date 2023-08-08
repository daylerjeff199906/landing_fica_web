<template>
  <div class="flex items-center justify-center absolute z-30 left-0 h-full">
    <ul class="text-center">
      <li>
        <NuxtLink to="/" active-class="text-epg line-clamp-2 underline"
          >Inicio</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/about" active-class="text-epg line-clamp-2 underline"
          >Sobre FICA</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/events" active-class="text-epg line-clamp-2 underline"
          >Eventos</NuxtLink
        >
      </li>

      <li>
        <NuxtLink to="/contact" active-class="text-epg line-clamp-2 underline"
          >Participa</NuxtLink
        >
      </li>

      <li>
        <NuxtLink to="/moreInfo" active-class="text-epg line-clamp-2 underline"
          >Únete a nosotros</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  padding: 20px;
  border-radius: 10px;
  color: white;
  list-style: none;
}

li {
  margin-bottom: 10px;
}
</style>
