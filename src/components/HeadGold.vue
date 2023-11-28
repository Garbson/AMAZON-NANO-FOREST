<template>
  <div class="relative bg-no-repeat bg-cover bg-center h-screen" style="background-image: url('img/goldbg.webp')">
     <NavBarG />
     <div class="absolute inset-0 bg-black opacity-70"></div>
     <div class="absolute inset-0 flex flex-col items-center text-white text-center">
       <!-- <img src="img/logoAmazon.png" alt="Logo da Empresa" class="logo mx-auto h-auto" /> -->
       <p class="headline absolute-center text-xl sm:mb-40 md:text-lg lg:text-lg xl:text-lg">
        Descubra a Revolução da Beleza: Novo Sérum Facial com Nanotecnologia Amazônica, a Inovação que Transforma e Ilumina sua Pele!
       </p>
     </div>
   </div>
</template>
<style scoped>
.logo {
 width: 80%;
 height: 50%;
 display: flex;
 text-align: center;
 align-items: center;
 margin-top: 20px;
 object-fit: contain;
}
@media (max-width: 768px) {
 .logo {
   width: 90%;
   height: 10rem;
   margin-top: 20%;
 }
 .headline {
   font-size: 15px;
   margin-top: 2px;
   text-align: left;
 }
}
.headline {
 font-size: 30px;
 font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
<script setup>
import NavBarG from '@/components/NavBarG.vue'
</script>