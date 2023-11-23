<template>
  <div>
    <!-- Seção principal -->
    <div class="relative bg-no-repeat bg-cover bg-center h-screen" style="background-image: url('img/Amazonia.jpg')">
      <NavBar />
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div class="absolute inset-0 flex flex-col items-center text-white text-center">
        <!-- <img src="img/logoAmazon.png" alt="Logo da Empresa" class="logo mx-auto h-auto" /> -->
        <p class="headline absolute-center text-xl sm:mb-40 md:text-lg lg:text-lg xl:text-lg">
          Nanobiotecnologia na Amazônia: transformando ativos naturais em inovações sustentáveis.
        </p>
      </div>
    </div>

    <!-- Seção About -->
    <About></About>

    <!-- carroussel -->
    <div class="text-center bg-green-900 p-12">
      <!-- <h2 class="text-4xl font-serif p-5 text-emerald-500"></h2> -->
      <div class="carroussel q-py-md text-center" id="q-app">
        <div class="q-mx-auto">
          <q-carousel
            class="carrousel q-mx-auto rounded-xl"
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            control-color="black"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide class="slide" :name="1">
              <q-img height="100%" width="50rem" src="img/capchair.png" fit="contain" class="framed-image"></q-img>
            </q-carousel-slide>
            <q-carousel-slide class="slide" :name="2">
              <q-img height="100%" width="50rem" src="img/gold.png" fit="contain" class="framed-image"></q-img>
            </q-carousel-slide>
            <q-carousel-slide class="slide" :name="3">
              <q-img height="100%" width="50rem" src="img/fruit.png" fit="contain" class="framed-image"></q-img>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

    <!-- Seção Donos da Empresa -->
    <!-- Seção Donos da Empresa -->
    <!-- <Equipe /> -->
    <Boss></Boss>
    <Contato />
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Boss from '@/components/Boss.vue'
import NavBar from '@/components/NavBar.vue'
import Contato from '@/components/Contato.vue'
import Equipe from '@/components/Equipe.vue'

const slide = ref(1)
const autoplay = ref(true)
const fitModes = ['cover', 'fill', 'contain', 'none', 'scale-down']
</script>

<style scoped>
.slide {
  overflow: hidden;
  padding: 0;
}
.framed-image {
  max-width: 100%;
  /* Adicione uma borda com uma cor mais atraente */
  box-sizing: border-box; /* Garante que a borda não aumente as dimensões da imagem */
}

.carrousel {
  max-width: 90%;
  width: 50rem;
}

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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
