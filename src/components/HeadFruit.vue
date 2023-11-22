<template>
    <div
      class="relative bg-no-repeat bg-cover bg-center"
      style="background-image: url('img/fruitbg.jpg'); height: 90vh"
    >
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div
        class="absolute inset-0 flex flex-col items-center text-white text-center"
      >
        <div class="text-center">
          <img
            src="img/fruit.png"
            alt="Logo da Empresa"
            class="logo mx-auto h-auto"
          />
          <p
            class="headline text-lg mx-10  mb-6 sm:mx-16 sm:mb-40 md:text-lg lg:text-lg xl:text-lg"
          >
          A NanoFruit está moldando o amanhã da produção de frutas, uma película inovadora de cada vez.
          </p>
        </div>
      </div>
    </div>
</template>
<style scoped>
.logo {
  width: 90%;
  height: 70%;
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  object-fit: contain;
}
@media (max-width: 768px) {
  .logo {
    width: 90%;
    height: 80%;
    margin-top: 20%;
  }
  .headline {
    font-size: 15px;
    margin-top: 2px;
    text-align: left;
  }
}

</style>