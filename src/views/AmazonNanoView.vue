<template>
  <div>
    <Head/>
    <Whats></Whats>
    <About id="about"/>
    <Carrousel/>
    <Boss/>
    <Contato></Contato>
    <Footer/>
  </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
import Boss from "@/components/Boss.vue";
import Head from "@/components/Head.vue";
import Carrousel from "@/components/Carrousel.vue";
import Contato from '@/components/Contato.vue'
import Whats from '../components/Whats.vue';
</script>
