<template>
    <footer class="footer flex bg-dark justify-between q-px-xl q-py-xl">
      <div class="q-my-auto">
        <img class="logo" src="img/logoAmazon.png" alt="logo Amazon" width="500rem" />
      </div>
  
      <div class="q-my-auto">
        <div>
          <h2 class="size-18 text-white text-raleway q-mb-sm">
            Siga-nos:
          </h2>
        </div>
        <div style="display: flex; align-items: center">
          <a href="https://www.facebook.com/www.golfim.com.br?mibextid=PzaGJu"
            ><img src="img/facebook.png" alt="Facebook" class="q-mr-sm w-15 h-11"
          /></a>
          <a href="https://instagram.com/amazon.nanoforest?igshid=OGQ5ZDc2ODk2ZA=="
            ><img
              src="img/instagram.svg"
              alt="Instagram"
              class="q-mr-sm w-15 h-11"
          /></a>
        </div>
      </div>
  
      <div class="q-my-auto">
        <div>
          <h2 class="size-18 text-white text-raleway q-mb-sm">Fale Conosco</h2>
          <p class=" text-montserrat size-14 q-mb-xs  text-white">
            <q-icon name="email" class="q-mr-xs text-white" />
            amazon.nanoforest@gmail.com
          </p>
          <p class="text-montserrat size-14 q-mb-xs  text-white">
            <q-icon name="call" class="q-mr-xs  text-white" />
            (68) 9924-90198
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .footer h2 {
      font-size: 18px; 
      font-weight: bolder;
    }
    .logo{
    height: 6rem;
    max-width: 100%;

    }
  }
  </style>
  