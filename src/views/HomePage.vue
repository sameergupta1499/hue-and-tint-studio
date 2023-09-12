<template>
  <v-main>
    <NavigationBar />
    <div id="scroll-page">
      <HeroBanner />
      <DummyComponent />
      <PortfolioComponent />
    </div>


  </v-main>
</template>

<script setup>
import HeroBanner from '@/components/pages/home/HeroBanner.vue';
import DummyComponent from '@/components/common/DummyComponent.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import PortfolioComponent from '@/components/pages/home/PortfolioComponent.vue';
import { useSmoothScrollOnMounted } from '@/utils/smoothScroll';
import { onMounted,onBeforeUnmount, provide, ref } from 'vue'; // Correct the import statement


const mainRef = ref(null);


onMounted(() => {
  window.addEventListener('load', function() {
  useSmoothScrollOnMounted();
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth',
  // });
});

  // useSmoothScrollOnMounted()
});

onBeforeUnmount(() => {
  this.deplacement = gsap.quickSetter("#scroll-page", "y", "px");
  this.deplacement(0)
});

</script>
