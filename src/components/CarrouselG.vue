<template>
  <div class="container max-w-full ">
    <div  id="q-app">
      <div class="q-mx-auto">
        <q-carousel
          class="carrousel q-mx-auto rounded-xl"
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          control-color="white"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide class="slide" :name="1">
            <q-img
              height="100%"
              width="50rem"
              src="img/CG1.jpg"
              fit="cover"
              class="framed-image"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide class="slide" :name="2">
            <q-img
              height="100%"
              width="50rem"
              src="img/CG2.jpg"
              fit="cover"
              class="framed-image"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide class="slide" :name="3">
            <q-img
              height="100%"
              width="50rem"
              src="img/CG3.jpg"
              fit="cover"
              class="framed-image"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide class="slide" :name="4">
            <q-img
              height="100%"
              width="50rem"
              src="img/CG4.jpg"
              fit="cover"
              class="framed-image"
            ></q-img>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const slide = ref(1)
const autoplay = ref(true)
const fitModes = ['cover', 'fill', 'contain', 'none', 'scale-down']

</script>
<style scoped>
.slide {
  overflow: hidden;
  padding: 0;
}
.aa{
    height: 300vh;
}

.framed-image {
  max-width: 100%;
  box-sizing: border-box; /* Garante que a borda não aumente as dimensões da imagem */
}

.carrousel {
  max-width: 90%;
  width: 50rem;
  margin-top: 40px;
}

</style>
