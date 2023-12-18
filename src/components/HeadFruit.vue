<template>
  <div class="relative bg-no-repeat bg-cover bg-center h-screen" style="background-image: url('img/fruitbg.jpg')">
    <NavBar logo="img/logoAmazon.png"/>
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center text-white text-center mt-32">
      <img src="img/fruit.png" alt="Logo do Produto" class="logo" />
      <p class="headline  text-xl   lg:text-lg xl:text-lg">
        A NanoFruit está moldando o amanhã da produção de frutas, <br>uma película inovadora de cada vez.
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