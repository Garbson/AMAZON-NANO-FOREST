<template>
  <div class="py-1 sm:py-16">
    <h2
      class="text-2xl md:text-3xl md:mb-6 text-center text-gray-800 font-serif mb-3"
    >
      Produto:
    </h2>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch"
    >
      <div>
        <img class="img rounded-3xl" src="img/fruitP.jpg" alt="">
      </div>
      <div class="texto  max-w-full bg-white p-4 md:p-8 rounded-md flex flex-col">
        <div
          class="texto text-base q-py-sm md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
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

</script>
<style scoped>
@media (max-width: 1258px)
{
.texto{font-size: 15px;
}
.img{
  margin-top: 30px;
}
}
@media (max-width: 1158px) {
  .container {
    grid-template-columns: 1fr;
  }
  .texto {
    font-size: 25px;
    margin-top: 30px;
  }
  .img {
    margin-top: 0; /* Adjust this as needed */
    max-height: 30rem;
    margin: 0 auto;
  }
}
@media (max-width: 768px){
img{
  max-width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.texto{
margin: 20px;
font-size: 17px;
}
}
</style>