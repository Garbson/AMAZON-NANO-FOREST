<template>
    <div class="cc bg-green-900 w-full mb-2 p-10">
      <h4 class="text-center text-white mb-4 font-serif">Participação</h4>
  
      <div class="flex flex-wrap justify-center">
        <!-- Imagem 1 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 px-4">
          <img class="w-full  rounded-md" src="img/evento1.jpg" alt="Descrição da imagem 1">
        </div>
  
        <!-- Imagem 2 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 px-4">
          <img class="w-full  rounded-md" src="img/evento3.jpg" alt="Descrição da imagem 2">
        </div>
  
        <!-- Imagem 3 -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 px-4">
          <img class="w-full  rounded-md" src="img/evento2.jpg" alt="Descrição da imagem 3">
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  img{
    height: 200px;
  }
    /* Adicione estilos específicos para a versão responsiva */
    @media screen and (max-width: 640px) {
      .flex {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
  