<template>
    <footer class="footer flex  justify-between q-px-xl q-py-sm">
      <div class="q-my-auto">
        <img class="logo" src="img/gold.png" alt="logo Amazon" width="350rem" />
      </div>
  
      <div class="q-my-auto">
        <div>
          <h2 class="size-18 text-black text-raleway q-mb-sm">
            Siga-nos:
          </h2>
        </div>
        <div style="display: flex; align-items: center">        
          <a href="https://instagram.com/goldnanoserum?igshid=OGQ5ZDc2ODk2ZA=="
            ><img
              src="img/instagram.svg"
              alt="Instagram"
              class="q-mr-sm w-15 h-11"
          /></a>
        </div>
      </div>
  
      <div class="q-my-auto">
        <div>
          <h2 class="size-18 text-black text-raleway q-mb-sm">Fale Conosco</h2>
          <p class=" text-montserrat size-14 q-mb-xs  text-black">
            <q-icon name="email" class="q-mr-xs text-black" />
            amazon.nanoforest@gmail.com
          </p>
          <p class="text-montserrat size-14 q-mb-xs  text-black">
            <q-icon name="call" class="q-mr-xs  text-black" />
            +55 (68) 99202-4156
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
    height: 10rem;
    max-width: 100%;

    }
  }
  </style>
  