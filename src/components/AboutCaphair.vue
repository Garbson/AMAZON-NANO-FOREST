<template>
  <div class="py-1 sm:py-16">
    <h2
          class="text-2xl md:text-3xl md:mb-6 text-center text-gray-800 font-serif"
        >
          Sobre Nós
        </h2>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch"
    >
      <div>
      <CarrouselC></CarrouselC>
      </div>
      <div
        class="max-w-full bg-white p-4 md:p-8 rounded-md  flex flex-col"
      >

        <div
          class="text-base q-py-sm md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
        >
          Bem-vindo à sinfonia da natureza e ciência entrelaçadas, onde a
          nanotecnologia dança com os segredos da Amazônia. Nossa origem,
          embalada pelos estudos da floresta no Acre, inspira uma inovação
          única. <br>De nossa origem amazônica, extraímos a magia da nanotecnologia
          para criar algo extraordinário. Nosso compromisso com a
          sustentabilidade se reflete em um Serum Capilar criado a partir da
          Nanotecnologia. Cada gota é uma promessa de renovar seus fios com a
          riqueza dos ativos amazônicos, uma honra à toda biodiversidade que
          acolhemos. Ao escolher nossos produtos, você não apenas adquire beleza
          capilar, mas se torna parte de uma narrativa que busca equilíbrio
          entre ciência e a floresta. Juntos, moldamos um amanhã onde seus
          cabelos refletem não apenas glamour, mas também respeito à natureza. <br>
          Sinta a energia presente da nossa história, marcada pelos mistérios da
          Amazônia e impulsionada pelo inovador NanocapHair 🌿✨
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CarrouselC from '@/components/CarrouselC.vue'
</script>
<style scoped>
@media (max-width: 768px) {
  img {
    max-width: 95%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
}
</style>
