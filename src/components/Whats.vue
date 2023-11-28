<template> 

     <div>
        <a class="whatsapp-button" href="https://api.whatsapp.com/send?phone=556892215074" target="_blank">
          <q-img src="/img/whatsapp.svg?" loading="eager" alt="WhatsApp" />
        </a>
    </div>
    </template>
    <styles lang="scss" scoped>
  // Estilos padrão
.whatsapp-button {
  position: fixed;
  background-size: cover;
  width: 5rem;
  background-repeat: no-repeat;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  font-size: 5rem;
  animation: whatsapp-bounce 1s infinite;

  @keyframes whatsapp-bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(10px);
    }
    80% {
      transform: translateY(5px);
    }
  }
}

// Media query para telas menores
@media (max-width: 768px) {
  .whatsapp-button {
    width: 3rem;  // Ajuste o tamanho conforme necessário
    font-size: 2rem;  // Ajuste o tamanho da fonte conforme necessário
  }
}

    </styles>