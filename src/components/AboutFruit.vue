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
        <img class="rounded-3xl" src="img/fruitP.jpg" alt="">
      </div>
      <div class="max-w-full bg-white p-4 md:p-8 rounded-md flex flex-col">
        <div
          class="text-base q-py-sm md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
        >
        Descubra o frescor além do comum! O Nanofruit é um Conservante de Frutas e
          Legumes, a base de Manteiga de Murumuru e Nanobiotecnologia, é a fusão
          perfeita entre inovação e tradição. Cada gota preserva o sabor
          autêntico da Amazônia. 🔬 <br><br> Seja o pioneiro em uma
          revolução gastronômica! Garanta agora o Conservante de Frutas e
          Legumes com Manteiga de Murumuru. Onde o sabor é preservado e a
          natureza é celebrada. A mudança está em suas mãos - <a class="text-red" href="">Clique AQUI</a> leve para casa a
          inovação que redefine a forma como conservamos nossos alimentos! 🛒🌿
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