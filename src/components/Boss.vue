<template>
  <section class="flex q-pa-lg bg-white justify-center" id="equipe">
    <div class="q-pa-lg">
      <h1 class="text-h5 text-black text-raleway q-pt-xl font-serif">Fernando Drummond</h1>
      <p class="qqq size-15 text-montserrat-400 text-black">
        Engenheiro Químico; <br />Doutor em Biotecnologia <br />Pós-Doutor em Nanobiotecnologia <br />Diretor Chefe de Tecnologia  Founder
        da Amazon NanoForest
      </p>
    </div>

    <div class="">
      <img class="equipe" src="img/Fernando.jpg" alt="" />
    </div>
  </section>

  <section class="aaa flex q-pa-lg bg-green-900 justify-center text-left">
    <div class="q-pa-lg text-right text-white">
      <h1 class="text-h5 text-raleway q-pt-xl text-left font-serif">Kauã Macedo</h1>
      <p class="qqq size-15 text-montserrat-400 text-left">
        Graduando em Farmácia <br />
        e Sistemas da Informação <br />
        CEO da Startup Nano Fruit <br />
        Vice-Diretor de produção e Co-Founder da Amazon NanoForest
      </p>
    </div> 
      <img class="equipe" src="img/kaua.jpg" alt="" />
  </section>

  <section class="flex q-pa-lg bg-white justify-center font-serif">
    <div class="q-pa-lg text-black">
      <h1 class="text-h5 text-raleway q-pt-xl font-serif">Joana Maia</h1>
      <p class="qqq size-18 text-montserrat-400">
        Graduanda em Nutrição <br />Chefe de Comunicação e Co-founder da Amazon NanoForest
      </p>
    </div>
     <img class="equipe" src="img/joana.jpg" alt="" />
  </section>

  <section class="aaa flex q-pa-lg bg-green-900 justify-center text-left font-serif">
    <div class="q-pa-lg text-right text-white">
      <h1 class="text-h5 text-raleway q-pt-xl text-left font-serif">Bruna Braga</h1>
      <p class="qqq size-18 text-montserrat-400 text-left">
        Graduanda em Farmácia <br />CEO da Startup Nanocaphair <br />Técnica em Biotecnologia e Co-Founder da Amazon NanoForest
      </p>
    </div>
      <img class="equipe" src="img/Bruna.jpg" alt="" />
  </section>

  <section class="flex q-pa-lg bg-white justify-center">
    <div class=" text-black">
      <h1 class="text-h5 text-raleway q-pt-xl font-serif">Iago Pimenta</h1>
      <p class="qqq size-18 text-montserrat-400">
        Chefe de Designer <br />CEO da Startup Gold Nanoserum e Co-Founder da Amazon NanoForest
      </p>
    </div>
      <img class="equipe ml-4" src="img/iago.jpg" alt="" />
  </section>
</template>
<style scoped>
.equipe {
border-radius: 50%;
width: 18rem;
height: 16rem;
}

.qqq {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
}
.aaa {
flex-direction: row-reverse;}

@media screen and (max-width: 700px){ 
 .aaa{ flex-direction: rom; }}

  @media screen and (max-width: 700px){
.qqq{
  font-size: 20px;
  margin-bottom: 0;
}
.equipe{
  width: 5rem;
  width: 15rem;
}
}
</style>
