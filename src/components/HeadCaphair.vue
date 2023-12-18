<template>
  <div class="relative bg-no-repeat bg-cover bg-center h-screen" style="background-image: url('img/Caphairbg.jpg')">
    <NavBar logo="img/logoAmazon.png"/>
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center text-white text-center mt-52">
      <img src="img/CaphairW.png" alt="Logo do Produto" class="logo" />
      <p class="headline  text-xl sm:mb-10 md:text-lg lg:text-lg xl:text-lg mt-5 md:mt-12">
        Revitalize seus Fios: Descubra o Poder Único do Novo Sérum para Crescimento Capilar com Nanotecnologia Amazônica. A Beleza que Brota da Natureza!
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 60%;
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
    width: 90%;
    height: auto;
    margin-top: 30%;
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
