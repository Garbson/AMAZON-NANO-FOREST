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
        <CarrouselG></CarrouselG>
      </div>
      <div class="max-w-full bg-white p-4 md:p-8 rounded-md flex flex-col">
        <div
          class="text-base  md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
        >
          Nascemos no solo fértil do Acre, uma região onde a selva revela seus
          segredos e respira vida. Em nossa origem amazônica, desvendamos as
          possibilidades da nanotecnologia, e, na floresta, encontramos
          inspiração para criar algo único. Nosso compromisso não é apenas com a
          ciência, mas com a sustentabilidade, refletido no Serum para Proteção
          da Pele, um elixir que abraça ativos amazônicos. Nosso nascimento na
          região amazônica não é apenas uma localização geográfica; é a aliança
          com a natureza, um compromisso com a sustentabilidade. Ao escolher
          nossos produtos, você se conecta a uma jornada única, onde a ciência
          se entrelaça com a selva. Desperte o espírito de descoberta e a paixão
          pela sustentabilidade. Juntos, estamos construindo um futuro onde a
          tecnologia e a Amazônia coexistem em harmonia. Sua escolha vai além de
          um simples produto. É uma afirmação de que é possível inovar com
          responsabilidade. Sinta a intensidade da nossa história, moldada pelas
          florestas da Amazônia e impulsionada pelo Serum para Proteção da Pele.
          Conecte-se à nossa jornada. Seja parte do futuro verde, onde a beleza
          encontra a sustentabilidade. 🌿
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CarrouselG from "@/components/CarrouselG.vue";
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
