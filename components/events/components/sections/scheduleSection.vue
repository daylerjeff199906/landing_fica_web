<template>
  <div class="sm:flex justify-between section-container container mx-auto">
    <div>
      <div class="text-3xl font-roboto font-bold">Nuestras presentaciones</div>
      <div class="text-lg font-roboto font-bold ">
        Experimenta un festival lleno de emociones y talento excepcional.
      </div>
    </div>
    <div class="mt-4">
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
      date="Día jueves 21"
      title="GRAN INICIO FESTIVO"
      subtitle="La inauguración explosiva del festival con presentaciones electrizantes que encenderán la noche. No te lo puedes perder."
      :isLeft="false"
      background-color="rose-500"
    />
    <EventsComponentsSectionScheduleComponent
      ref="section2"
      date="Día viernes 22"
      title="GRAN INICIO FESTIVO"
      subtitle="La inauguración explosiva del festival con presentaciones electrizantes que encenderán la noche. No te lo puedes perder."
      :isLeft="true"
      background-color="yellow-400"
    />
    <EventsComponentsSectionScheduleComponent
      ref="section3"
      date="Día sábado 23"
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
  background-image: url("/assets/images/imgBanners/festival_escenario.jpg");
  background-size: cover;
  object-fit: cover;
  /* background-position: center; Centra la imagen */
  background-attachment: fixed;
  width: 100%;
}
</style>
