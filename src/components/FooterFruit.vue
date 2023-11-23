<template>
    <footer class="footer bg-dark flex justify-between q-px-xl q-py-xl">
      <div class="q-my-auto" style="order: 1; text-align: center;">
        <div style="margin-right: 20px;">      
          <img
            src="img/kaua.jpg"
            alt="CEO Image"
            class="CEO q-mr-sm w-15 h-15 rounded-full"
            style="object-fit: cover; margin: 0 auto;"
          />
        </div>
  
        <div style="text-align: left;">
          <h2 class="size-18 text-white text-raleway q-mb-sm">Contato</h2>
          <p class="text-montserrat size-14 q-mb-xs text-white">
            <q-icon name="email" class="q-mr-xs text-white" />
            amazon.nanoforest@gmail.com
          </p>
          <p class="text-montserrat size-14 q-mb-xs text-white">
            <q-icon name="call" class="q-mr-xs text-white" />
            (68) 9924-90198
          </p>
        </div>
      </div>
  
      <div class="q-my-auto" style="order: 3;">
        <img class="logo" src="img/fruit.png" alt="logo Amazon" width="500rem" />
      </div>
  
      <div class="q-my-auto" style="order: 2; text-align: center;">
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
    </footer>
  </template>
  
  <style scoped>
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    .footer h2 {
      font-size: 18px;
      font-weight: bolder;
      display: flex;
      align-items: center;
      text-align: center;
    }
  
    .logo {
      width: 100%;
      height: 8rem;
    }
  
    .logo {
      height: 10rem;
    }
  
    .CEO {
      height: 10rem;
      margin: 0 auto;
    }
  }
  </style>
  