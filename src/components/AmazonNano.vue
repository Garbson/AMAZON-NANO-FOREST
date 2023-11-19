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
            class="headline  text-lg mx-10 mt-24 mb-6 sm:mx-16 sm:mb-40 md:text-lg lg:text-lg xl:text-lg"
          >
          Nanobiotecnologia na Amazônia: transformando ativos naturais em inovações sustentáveis. </p>
        </div>
      </div>
    </div>

    <!-- carroussel -->
    <div class="text-center">
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

    <!-- Seção About -->
    <div class="py-8 sm:py-16">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div>
            <img class="w-full h-full object-cover mb-8 md:mb-0" src="img/sobreimg.png" alt="Imagem Sobre Nós">
        </div>
        <div class="max-w-full bg-white p-4 md:p-12 rounded-md shadow-md flex flex-col h-full">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-gray-800">
                Sobre Nós
            </h2>
            <p class="text-lg md:text-xl leading-7 md:leading-9 text-justify text-gray-700 mb-6 md:mb-12 font-serif">
                A Amazon NanoForest é uma empresa inovadora localizada no coração do
                Acre. Nascemos da união de três Startups visionárias; a Nanocaphair,
                Gold Nanoserum e a Nano Fruit. Apesar de nossa origem modesta, nos
                destacamos como pioneiros na região, no uso da nanotecnologia,
                aplicada na utilização dos recursos sustentáveis da Amazônia, para
                desenvolver soluções impactantes. Estamos comprometidos em
                impulsionar o progresso e a sustentabilidade, explorando as infinitas
                possibilidades que a nanotecnologia pode oferecer. Com um foco
                especial na Amazônia, nosso trabalho visa equilibrar o avanço
                científico com a preservação do meio ambiente, contribuindo para um
                futuro mais sustentável.
            </p>
        </div>
    </div>
</div>








    <!-- Seção Donos da Empresa -->
    <!-- Seção Donos da Empresa -->
    <section class="flex q-pa-lg bg-dark justify-center">
      <div class="q-pa-lg">
        <h1 class="text-h4 text-white text-raleway q-pt-xl">
          Fernando Drummond
        </h1>
        <p class="qualificações size-18 text-montserrat-400 text-white">
          Engenheiro Químico; <br />Doutor em Biotecnologia <br />Pós-Doutor em
          Nanobiotecnologia <br />Diretor Chefe de Tecnologia e Founder da
          Amazon NanoForest
        </p>
      </div>

      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/Fernando.jpg" alt="" />
      </div>
    </section>

    <section class="aaa flex q-pa-lg justify-center text-left">
      <div class="q-pa-lg text-right">
        <h1 class="text-h4  text-raleway q-pt-xl text-left">
          Kauã Macedo
        </h1>
        <p class="qualificações size-18 text-montserrat-400 text-left">
          Graduando em Farmácia <br />
          e Sistemas da Informação <br />
          CEO da Startup Nano Fruit <br />
          Vice-Diretor de produção e Co-Founder da Amazon NanoForest
        </p>
      </div>
      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/kaua.jpg" alt="" />
      </div>
    </section>

    <section class="flex q-pa-lg bg-dark justify-center">
      <div class="q-pa-lg">
        <h1 class="text-h4 text-white text-raleway q-pt-xl">Joana Maia</h1>
        <p class="qualificações size-18 text-montserrat-400 text-white">
          Graduanda em Nutrição <br />Chefe de Comunicação e Co-founder da
          Amazon NanoForest
        </p>
      </div>

      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/joana.jpg" alt="" />
      </div>
    </section>

    <section class="aaa flex q-pa-lg justify-center text-left">
      <div class="q-pa-lg text-right">
        <h1 class="text-h4  text-raleway q-pt-xl text-left">
          Bruna Braga
        </h1>
        <p class="qualificações size-18 text-montserrat-400 text-left">
          Graduanda em Farmácia <br />CEO da Startup Nanocaphair <br />Técnica
          em Biotecnologia e Co-Founder da Amazon NanoForest
        </p>
      </div>
      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/Bruna.jpg" alt="" />
      </div>
    </section>
  
  <section class="flex q-pa-lg bg-dark justify-center">
    <div class="q-pa-lg">
      <h1 class="text-h4 text-white text-raleway q-pt-xl">Iago Pimenta</h1>
      <p class="qualificações size-18 text-montserrat-400 text-white">
        Chefe de Designer <br />CEO da Startup Gold Nanoserum e Co-Founder da
        Amazon NanoForest
      </p>
    </div>

    <div class="q-pa-md q-mt-lg">
      <img class="equipe" src="img/iago.jpg" alt="" />
    </div>
  </section>
  <Footer></Footer>
</div>
</template>

<script>
import { ref } from "vue";
import  Footer from "@/components/Footer.vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      fitModes: ["cover", "fill", "contain", "none", "scale-down"],
    };
  },
  components: { Footer },
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
.equipe {
  border-radius: 50%;
  width: 20rem;
  height: 18rem;
  border: 1px solid black;
}
.aaa {
  flex-direction: row-reverse;

  @media screen and (max-width: 600px) {
    flex-direction: rom;
  }
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
  .headline{
    font-size: 15px;
    margin-top: 2px;
    text-align: left;
  }
}
.headline{
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.qualificações{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: x-large;
}
</style>
