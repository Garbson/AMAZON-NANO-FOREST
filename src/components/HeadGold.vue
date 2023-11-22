<template>
    <div
      class="relative bg-no-repeat bg-cover bg-center"
      style="background-image: url('img/goldbg.webp'); height: 90vh"
    >
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div
        class="absolute inset-0 flex flex-col items-center text-white text-center"
      >
        <div class="text-center">
          <img
            src="img/gold.png"
            alt="Logo da Empresa"
            class="logo mx-auto h-auto"
          />
          <p
            class="headline text-lg mx-10 mt-24 mb-6 sm:mx-16 sm:mb-40 md:text-lg lg:text-lg xl:text-lg"
          >
          GoldSerum: Elevando a Proteção da Sua Pele para um Brilho Radiante
          </p>
        </div>
      </div>
    </div>
</template>
<style scoped>
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
    margin-top: 10%;
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