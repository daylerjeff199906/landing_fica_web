<template>
  <div class="flex justify-between section-container container mx-auto">
    <div>
      <div class="text-3xl font-roboto font-bold">Nuestras presentaciones</div>
      <div class="text-lg font-roboto font-bold">
        Experimenta un festival lleno de emociones y talento excepcional.
      </div>
    </div>
    <div>
      <GeneralButtonGeneral
        label="Lunes 21"
        @click="scrollToSection('section1')"
      />
      <GeneralButtonGeneral
        label="Martes 22"
        @click="scrollToSection('section2')"
      />
      <GeneralButtonGeneral
        label="Miercoles 23"
        @click="scrollToSection('section3')"
      />
    </div>
  </div>
  <div class="bg-image">
    <EventsComponentsSectionScheduleComponent
      ref="section1"
      date="Día Lunes 29"
      title="GRAN INICIO FESTIVO"
      subtitle="La inauguración explosiva del festival con presentaciones electrizantes que encenderán la noche. No te lo puedes perder."
      :isLeft="false"
      background-color="[#D65EEA]"
    />
    <EventsComponentsSectionScheduleComponent
      ref="section2"
      date="Día Lunes 29"
      title="GRAN INICIO FESTIVO"
      subtitle="La inauguración explosiva del festival con presentaciones electrizantes que encenderán la noche. No te lo puedes perder."
      :isLeft="true"
    />
    <EventsComponentsSectionScheduleComponent
      ref="section3"
      date="Día Lunes 29"
      title="GRAN INICIO FESTIVO"
      subtitle="La inauguración explosiva del festival con presentaciones electrizantes que encenderán la noche. No te lo puedes perder."
      :isLeft="false"
      background-color="primary"
    />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionRef) {
      this.$refs[sectionRef].$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>

<style scoped>
.bg-image {
  background-image: url("/assets/images/artista.png");
  background-size: cover; /* Ajusta la imagen al contenedor cubriéndolo */
  /* background-position: center; Centra la imagen */
  background-attachment: fixed; /* Hace que la imagen de fondo parezca fija */
  /* Agrega más estilos según tus necesidades */
}
</style>
