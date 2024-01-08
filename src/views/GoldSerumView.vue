<template>
    <div>    
    <HeadGold></HeadGold>
    <Whats></Whats>
    <AboutGold id="about"></AboutGold>
    <Contato id="contato"></Contato>
    <Footer></Footer>
    </div>
    </template>
    <script setup>
    import HeadGold from '../components/HeadGold.vue';
    import AboutGold from '../components/AboutGold.vue';
    import Contato from '@/components/Contato.vue'
    import Footer from '../components/Footer.vue';
    import Whats from '../components/Whats.vue';
    </script>