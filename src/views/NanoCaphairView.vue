<template>
    <div>    
    <HeadCaphair></HeadCaphair>
    <Whats></Whats>
    <AboutCaphair id="about"></AboutCaphair>
    <Contato id="contato"></Contato>
    <Footer></Footer>
    </div>
    </template>
    <script setup>
    import HeadCaphair from '../components/HeadCaphair.vue';
    import AboutCaphair from '../components/AboutCaphair.vue';
    import Contato from '@/components/Contato.vue';
    import Footer from '../components/Footer.vue';
    import Whats from '../components/Whats.vue';
    </script>