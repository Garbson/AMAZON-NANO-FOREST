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
        <img class="img rounded-3xl" src="img/goldP.jpg" alt="">
      </div>
      <div class="texto max-w-full bg-white p-4 md:p-8 rounded-md flex flex-col">
        <div
          class="texto text-base q-py-sm md:text-lg leading-6 md:leading-8 text-justify text-gray-700 md:mb-12 font-serif"
        >
        Para aqueles que priorizam elevados padrões nos cuidados com a pele e
          apreciam a exclusividade, o Gold Nanoserum emerge como uma inovação
          notável. Este sérum nanotecnológico é confeccionado com ativos
          sustentáveis provenientes da Amazônia, aliados ao ouro 24k, exercendo
          uma ação profundamente benéfica na saúde cutânea. Seu poder
          antioxidante robusto proporciona hidratação e rejuvenescimento,
          efetivamente eliminando rugas e linhas de expressão. <br><br>Contemple a
          influência singular que a Amazônia e a Nanobiotecnologia podem exercer
          sobre a sua pele. Gentilmente, <a class="text-red" href="">CLIQUE AQUI</a> para entrar em contato
          conosco pelo WhatsApp e adquirir o seu produto.
        </div>
      </div>
    </div>
  </div>
</template>
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