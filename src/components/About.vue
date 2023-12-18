<template>
  <div>
    <eventos></eventos>
    
    <!-- Seção "Sobre Nós" -->
    <div class="py-1 sm:py-16 mt-0">
      <h2 class="text-2xl md:text-3xl md:mb-6 text-center text-gray-800 font-serif">Sobre Nós</h2>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch">
        <div>
          <img class="img  mb-8 mt-3 md:mb-0" src="img/sobreimg.png" alt="Imagem Sobre Nós" />
        </div>
        <div class="texto  max-w-full bg-white  md:p-8 rounded-md  flex flex-col">
          <div class="texto md:text-lg leading-2 md:leading-8 text-justify text-gray-700  md:mb-1 font-serif">
            <p>
              A Amazon NanoForest é uma empresa inovadora localizada no coração da Amazônia - Acre.
              <br>
              Nascemos da união de três Startups visionárias:
              <ul class="list-disc ml-6 mb-2">
                <li>Nanocaphair.</li>
                <li>Gold Nanoserum e a</li>
                <li>Nano Fruit.</li>
              </ul>
              Somos pioneiros no uso da Nanobiotecnologia aplicada aos recursos naturais de forma sustentável na Amazônia.
              <br>
              Estamos comprometidos em impulsionar o desenvolvimento sustentável na Amazônia, explorando as infinitas possibilidades que a Nanobiotecnologia pode oferecer.
              <br>
              Com o foco especial na sua biodiversidade, nosso trabalho visa equilibrar o avanço científico com a preservação do meio ambiente, contribuindo para o desenvolvimento da bioeconomia e da sustentabilidade.
            </p>
          </div>
        </div>
      </div>
    
      <h2 class="mt-4 text-2xl md:text-3xl md:mb-6 text-center text-gray-800 font-serif">Nanobiotecnologia</h2>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch mb-7">
        <div class="sm:order-1">
    <img class="img mb-8 mt-3 md:mb-0" src="img/nanotec.jpg" alt="Imagem Nanotecnologia" />
  </div>
    <div class="texto max-w-full bg-white md:p-8 rounded-md flex flex-col">
      <div class="texto md:text-lg leading-2 md:leading-8 text-justify text-gray-700 md:mb-1 font-serif">
        <p>
          A Amazônia, conhecida por sua riqueza inigualável em biodiversidade, florestas exuberantes e ecossistemas únicos, enfrenta desafios significativos no século XXI. Em meio a essa paisagem fascinante, a nanotecnologia emerge como uma promissora aliada na busca por soluções inovadoras e sustentáveis.

          A Amazon NanoForest está na vanguarda dessa revolução, unindo a magia da nanotecnologia aos recursos naturais da Amazônia. Nossa abordagem pioneira busca equilibrar o avanço científico com a preservação ambiental, promovendo o desenvolvimento sustentável na região.

          r um legado de sustentabilidade duradoura.
        </p>
      </div>
    </div>
  </div>
</div>  
    </div>
</template>
<script setup>
import eventos from '@/components/eventos.vue'
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