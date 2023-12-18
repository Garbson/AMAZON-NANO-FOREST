<template>
  <div class="py-1 sm:py-16">
    <h2
      class="text-2xl md:text-3xl md:mb-6 text-center text-gray-800 font-serif"
    >
      Produto:
    </h2>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch"
    >
      <div>
        <img class="rounded-3xl" src="img/caphairP.jpg" alt="">
      </div>
      <div class="max-w-full bg-white p-4 md:p-8 rounded-md flex flex-col">
        <div
          class="text-base q-py-sm md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
        >
        O Nanocap Hair destaca-se como um produto de vanguarda no mercado,
          especialmente no que se refere ao estímulo do crescimento e
          fortalecimento capilar, consolidando-se como a escolha primordial no
          enfrentamento da queda capilar. <br><br>A integração da Nanobiotecnologia com
          os ativos provenientes da Amazônia culmina no produto final,
          promovendo a obtenção de cabelos mais robustos, resilientes e densos.
          Faça parte desta história de sucesso; para mais informações, <a class="text-red" href="">CLIQUE
          AQUI</a> e entre em contato conosco pelo WhatsApp para adquirir o seu.🔬

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CarrouselFruit from "@/components/CarrouselFruit.vue";
</script>
<style scoped>
@media (max-width: 768px) {
  img {
    max-width: 95%;
    margin: 0 auto;
  }
}
</style>