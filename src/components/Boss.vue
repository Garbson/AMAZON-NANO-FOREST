<template>
    <section class="flex q-pa-lg bg-dark justify-center">
      <div class="q-pa-lg">
        <h1 class="text-h4 text-white text-raleway q-pt-xl font-serif">
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
        <h1 class="text-h4 text-raleway q-pt-xl text-left font-serif">Kauã Macedo</h1>
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

    <section class="flex q-pa-lg bg-dark justify-center font-serif">
      <div class="q-pa-lg">
        <h1 class="text-h4 text-white text-raleway q-pt-xl font-serif">Joana Maia</h1>
        <p class="qualificações size-18 text-montserrat-400 text-white">
          Graduanda em Nutrição <br />Chefe de Comunicação e Co-founder da
          Amazon NanoForest
        </p>
      </div>

      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/joana.jpg" alt="" />
      </div>
    </section>

    <section class="aaa flex q-pa-lg justify-center text-left font-serif">
      <div class="q-pa-lg text-right">
        <h1 class="text-h4 text-raleway q-pt-xl text-left font-serif">Bruna Braga</h1>
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
        <h1 class="text-h4 text-white text-raleway q-pt-xl font-serif">Iago Pimenta</h1>
        <p class="qualificações size-18 text-montserrat-400 text-white">
          Chefe de Designer <br />CEO da Startup Gold Nanoserum e Co-Founder da
          Amazon NanoForest
        </p>
      </div>

      <div class="q-pa-md q-mt-lg">
        <img class="equipe" src="img/iago.jpg" alt="" />
      </div>
    </section>

</template>
<style scoped>
.equipe {
  border-radius: 50%;
  width: 20rem;
  height: 18rem;
  border: 1px solid black;
}

.qualificações {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: x-large;
}
.aaa {
  flex-direction: row-reverse;

  @media screen and (max-width: 600px) {
    flex-direction: rom;
  }
}

</style>