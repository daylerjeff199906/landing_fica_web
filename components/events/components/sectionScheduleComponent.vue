<template>
  <div
    :class="`bg-${
      backgroundColor || 'black'
    } section-container container mx-auto text-slate-50`"
  >
    <div class="grid grid-cols-2 mb-10">
      <div :class="`space-y-4 ${isLeft ? 'col-start-1' : 'col-start-2'}`">
        <div class="text-2xl font-bold font-roboto">{{ date }}</div>
        <div class="text-7xl font-bold">{{ title }}</div>
        <div class="text-base font-semibold">{{ subtitle }}</div>
        <div><GeneralButtonGeneral label="COMPRAR ENTRADAS" /></div>
      </div>
    </div>
    <div class="text-2xl font-roboto font-bold">Eventos</div>
    <div class="grid grid-cols-4 gap-4 mt-4">
      <!-- <EventsComponentsCardEvents
        v-for="event in events"
        :key="event.id"
        :data="event"
      /> -->
      <EventsComponentsCardEvents />
      <EventsComponentsCardEvents />
      <EventsComponentsCardEvents />
      <EventsComponentsCardEvents />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    title: String,
    subtitle: String,
    backgroundColor: String,
    isLeft: Boolean,
    events: Array, // Assuming each event has an "id" property
  },
};
</script>
