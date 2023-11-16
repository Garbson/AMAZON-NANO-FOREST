<template>
  <div>
    <!-- Seção principal -->
    <div
      class="relative bg-no-repeat bg-cover bg-center"
      style="background-image: url('img/amazon.jpg'); height: 90vh"
    >
      <div class="absolute inset-0 bg-black opacity-90"></div>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <div class="text-center">
          <img
            src="img/logoAmazon.jpg"
            alt="Logo da Empresa"
            class="logo mx-auto"
          />
          <p class="text-lg mx-16 mb-40 font-montserrat">
            Desbravando os segredos da nanotecnologia na rica biodiversidade da
            Amazônia, a Amazon NanoForest é líder na pesquisa e aplicação de
            tecnologias inovadoras. <br>Nosso compromisso é explorar o potencial
            infinito da nanotecnologia para criar soluções sustentáveis e
            preservar o ecossistema único da região amazônica.
          </p>
        </div>
      </div>
    </div>


    <div class="text-center">
    <div class="carroussel q-py-md text-center" id="q-app">
      <div class="q-mx-auto">
        <q-carousel class="carrousel q-mx-auto"
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
            <q-img height="100%" width="50rem" src="img/gold.png" fit="cover" class="framed-image"></q-img>
          </q-carousel-slide>
          <q-carousel-slide class="slide" :name="3">
            <q-img height="100%" width="50rem" src="img/fruit.png" fit="cover" class="framed-image"></q-img>
          </q-carousel-slide>
        </q-carousel>
      </div>
 </div>
</div>

    <!-- Seção About -->
    <div class=" py-16">
      <div
        class="container mx-auto max-w-full bg-white p-12 rounded-md shadow-md mb-12"
      >
        <h2 class="text-5xl font-bold mb-8 text-center text-gray-800">
          Sobre Nós
        </h2>
        <p class="text-xl leading-8 text-justify text-gray-700 mb-12 mx-44">
          A Amazon Nano Forest é uma startup inovadora localizada no coração do
          Acre. Nascemos da fusão de três empresas visionárias: NANOCAHAIR,
          NANOFRUIT e NANOSERUM. Apesar de nossa origem modesta, nos destacamos
          como líderes em nanotecnologia, aplicando tecnologia de ponta para
          desenvolver soluções impactantes. Estamos comprometidos em impulsionar
          o progresso e a sustentabilidade, explorando as infinitas
          possibilidades que a nanotecnologia oferece. Com um foco especial na
          Amazônia, nosso trabalho visa equilibrar o avanço científico com a
          preservação do meio ambiente, contribuindo para um futuro mais
          sustentável.
        </p>
      </div>

     
    

      <!-- Seção Donos da Empresa -->
      <div class="container mx-auto max-w-3xl flex flex-col md:flex-row">
        <!-- Dono 1 -->
        <div class="w-full mb-8">
          <img
            src="img/owner1.jpg"
            alt="Dono da Empresa"
            class="owner-img max-w-full rounded-full mb-4 mx-auto"
          />
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900">Kaua</h3>
            <p class="text-gray-700">cientista</p>
          </div>
        </div>

        <!-- Dono 2 -->
        <div class="w-full">
          <img
            src="img/owner2.jpg"
            alt="Dono da Empresa"
            class="owner-img max-w-full rounded-full mb-4 mx-auto"
          />
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900">Nome do Dono 2</h3>
            <p class="text-gray-700">Cargo/Descrição do Dono 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      fitModes: ['cover', 'fill', 'contain', 'none', 'scale-down']
    }
  }
}
</script>
<style  scoped>
.slide {
  overflow: hidden;
  padding: 0;
}
.framed-image {
  max-width: 100%;
   /* Adicione uma borda com uma cor mais atraente */
  box-sizing: border-box; /* Garante que a borda não aumente as dimensões da imagem */
}

.carrousel{
 max-width: 100%;
 width: 50rem;
}

</style>