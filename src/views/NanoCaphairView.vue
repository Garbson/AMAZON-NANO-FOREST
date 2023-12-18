<template>
    <div>    
    <HeadCaphair></HeadCaphair>
    <Whats></Whats>
    <AboutCaphair id="about"></AboutCaphair>
    <ContatoC id="contato"></ContatoC>
    <Footer></Footer>
    </div>
    </template>
    <script setup>
    import HeadCaphair from '../components/HeadCaphair.vue';
    import AboutCaphair from '../components/AboutCaphair.vue';
    import ContatoC from '@/components/ContatoC.vue';
    import Footer from '../components/Footer.vue';
    import Whats from '../components/Whats.vue';
    </script>