<template>
  <header
    :class="[navClass]"
    class="fixed flex flex-wrap z-50 w-full text-sm py-4"
  >
    <nav
      class="max-w-[85rem] justify-center flex w-full mx-auto px-4 sm:flex sm:items-center"
      aria-label="Global"
    >
      <!-- logo -->
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold" href="#">
          <img src="img/" alt="" class="h-20"
        /></a>
      </div>

      <!-- nav-bar -->
      <div class="flex-grow">
        <div
          class="flex gap-5 mt-5 sm:justify-center md:justify-end sm:mt-0 sm:ps-5 centralizar"
        >
          <a
            class="font-bold text-md text-white"
            href="#about"
            aria-current="page"
            >Sobre Nós</a
          >
          <a
            class="font-bold text-md text-white"
            href="#contato"
            aria-current="page"
            >Contato</a
          >
          <div>
            <button
              type="button"
              class="flex text-md items-center w-full text-white hover:text-gray-400 font-bold"
            >
              <a href="/">AmazonNanoForest</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  logo: String,
});

const navClass = ref("bg-green-900");

const updateVisibility = () => {
  navClass.value = window.scrollY > 200 ? "bg-green-900" : "bg-transparent";
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", () => {
    updateVisibility();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", () => {
    updateVisibility();
  });
});
</script>

<style>
@media (max-width: 532px) {
  .centralizar {
    justify-content: center;
    gap: 2.15rem;
  }
}
</style>
