<template>
  <div>
    <div class="section-container container mx-auto">
      <div class="grid grid-cols-4 sm:grid-cols-12 gap-6">
        <div class="col-span-4 space-y-6">
          <div>
            <img src="/assets/images/logoCarbonoNeutral.png" />
          </div>
          <div class="text-5xl font-bold">Evento carbono Neutral</div>
          <div class="text-base font-medium">
            Nuestra meta es promover la cultura, el arte y estimular la economía
            local y regional a través de nuestro festival.
          </div>
        </div>
        <div class="col-span-8">
          <div class="sm:columns-2 gap-6 space-y-6">
            <AboutComponentsCardAbout
              iconUrl="/assets/images/svg/attach_money.png"
              title="Promoción cultural y económica:"
              description="Nuestra meta es promover la cultura, el arte y estimular la economía local y regional a través de nuestro festival."
            />
            <AboutComponentsCardAbout
              iconUrl="/assets/images/svg/Done_outline.png"
              title="Organización de primer nivel:"
              description="Estamos comprometidos en brindar una experiencia de calidad, cuidando cada detalle, desde la selección de artistas y  la satisfacción de todos."
            />
            <AboutComponentsCardAbout
              iconUrl="/assets/images/svg/Music_note.png"
              title="Experiencia inolvidable:"
              description="Nos enfocamos en aspectos cruciales como la imagen de la ciudad, la seguridad y la logística, para asegurar una experiencia musical inolvidable. "
            />
            <AboutComponentsCardAbout
              iconUrl="/assets/images/svg/Recycle.png"
              title="Compensación de emisiones:"
              description="Se promueve el uso de fuentes de energía renovable y se promueve acciones como la plantación de árboles."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
