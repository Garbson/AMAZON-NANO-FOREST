<template>
  <div>
    <!-- Seção principal -->
    <div
      class="relative bg-no-repeat bg-cover bg-center"
      style="background-image: url('img/Amazonia.jpg'); height: 90vh"
    >
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div
        class="absolute inset-0 flex flex-col items-center text-white text-center"
      >
        <div class="text-center mt-28">
          <img
            src="img/logoAmazon.png"
            alt="Logo da Empresa"
            class="logo mx-auto h-auto"
          />
          <p
            class="headline text-lg mx-10 mt-24 mb-6 sm:mx-16 sm:mb-40 md:text-lg lg:text-lg xl:text-lg"
          >
            Nanobiotecnologia na Amazônia: transformando ativos naturais em
            inovações sustentáveis.
          </p>
        </div>
      </div>
    </div>

    <!-- Seção About -->
    <About></About>

    <!-- carroussel -->
    <div class="text-center">
      <h2 class="text-4xl font-serif tmb-4 text-gray-800">Nossas Empresas:</h2>
      <div class="carroussel q-py-md text-center" id="q-app">
        <div class="q-mx-auto">
          <q-carousel
            class="carrousel q-mx-auto"
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
              <q-img
                height="100%"
                width="50rem"
                src="img/capchair.png"
                fit="contain"
                class="framed-image"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide class="slide" :name="2">
              <q-img
                height="100%"
                width="50rem"
                src="img/gold.png"
                fit="contain"
                class="framed-image"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide class="slide" :name="3">
              <q-img
                height="100%"
                width="50rem"
                src="img/fruit.png"
                fit="contain"
                class="framed-image"
              ></q-img>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

    <!-- Seção Donos da Empresa -->
    <!-- Seção Donos da Empresa -->
    <Boss></Boss>
    <Footer></Footer>
  </div>
</template>

<script>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
import Boss from "@/components/Boss.vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      fitModes: ["cover", "fill", "contain", "none", "scale-down"],
    };
  },
  components: { Footer, About, Boss },
};
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
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
