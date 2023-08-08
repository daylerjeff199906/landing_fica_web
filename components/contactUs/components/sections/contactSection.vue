<template>
  <div>
    <div class="section-container container mx-auto">
      <div class="text-4xl font-bold text-center mb-6">Contáctanos</div>
      <div class="sm:columns-3 space-y-4 px-6 sm:space-x-6 sm:px-14">
        <ContactUsComponentsCardContact
          title="Encuentra nuestras oficinas"
          data="Iquitos, calle lorem ipsus #2123"
          imageUrl="/assets/images/svg/LocationOn.png"
        />
        <ContactUsComponentsCardContact
          title="Contáctanos al telefono"
          data="+51 965 620 970"
          imageUrl="/assets/images/svg/Call.png"
        />
        <ContactUsComponentsCardContact
          title="Envíanos un correo"
          data="patrocinio@ficainternacional.com"
          imageUrl="/assets/images/svg/Email.png"
        />
      </div>
    </div>
  </div>
</template>
