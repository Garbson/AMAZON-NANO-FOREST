<template>
  <div class="relative bg-no-repeat bg-cover bg-center h-screen" style="background-image: url('img/goldbg.webp')">
    <NavBar logo="img/logoAmazon.png"/>
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center text-white text-center mt-24">
      <img src="img/gold.png" alt="Logo do Produto" class="logo" />
      <p class="headline  text-xl   lg:text-lg xl:text-lg">
        Descubra a Revolução da Beleza: Novo Sérum Facial com Nanotecnologia Amazônica, a Inovação que Transforma e Ilumina sua Pele!
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 50%;
  height: auto;
  display: flex;
  text-align: center;
  align-items: center;
  object-fit: contain;
}
.headline {
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

@media (max-width: 768px) {
  .logo {
    width: 100%;
    height: auto;
    margin-top: auto;
  }

  .headline {
    font-size: 18px;
    margin-top: 20px;
    margin: 20 auto;
  }
}
@media (max-width: 538px) {
  .logo {
    width: 100%;
    height: auto;
    margin-top: 20%;
  }

  .headline {
    font-size: 18px;
    margin-top: 20px;
    margin: 20 auto;
  }
}
</style>
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>