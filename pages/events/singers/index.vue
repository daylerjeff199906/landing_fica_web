<template>
  <div>
    <GeneralBannerSection
      imageUrl="/assets/images/BannerSectionActividades.png"
      title="NUESTROS ARTISTAS TE ESPERAN"
      description="Únete a nosotros para disfrutar de música, danza y sorpresas inolvidables. Asegura tu lugar y sé testigo de momentos inolvidables en nuestro escenario."
      cardActivate="true"
      labelBleft="EVENTOS"
      labelBrigth="COMPRAR"
    />
    <div class="section-container container mx-auto">
      <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <GeneralCardGeneral />
        <GeneralCardGeneral />
        <GeneralCardGeneral />
        <GeneralCardGeneral />
        <GeneralCardGeneral />
        <GeneralCardGeneral />
        <GeneralCardGeneral />
      </div>
    </div>
  </div>
</template>
