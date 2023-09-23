<template>
  <v-main>
    <!-- <NavigationBar /> -->
    <div id="scroll-wrapper">
      <div id="scroll-container-parent">
        <div id="scroll-container" v-if="scrollbar !== null">
          <HeroBanner />
          <!-- <DummyComponent /> -->
          <VideoComponent />
          <PortfolioComponent />
          <DummyComponent />
        </div>
      </div>
    </div>

  </v-main>
</template>
<script>
import { onMounted, provide, ref } from 'vue';
import HeroBanner from '@/components/pages/home/HeroBanner.vue';
import DummyComponent from '@/components/common/DummyComponent.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import PortfolioComponent from '@/components/pages/home/PortfolioComponent.vue';
import VideoComponent from '@/components/pages/home/VideoComponent.vue';
import { init } from '@/utils/smoothScroll.js';
export default {
  setup() {
    const scrollbar = ref(null);
    onMounted(() => {
      scrollbar.value = init("scroll-wrapper");
    });
    return {
      scrollbar
    };
  },
  components: {
    HeroBanner,
    DummyComponent,
    NavigationBar,
    PortfolioComponent,
    VideoComponent
  },
};
</script>
<style scoped>
#scroll-wrapper {
  height: 100vh;
  width: 100%;
  overflow: auto;
}

/* .container-scrollbar {
  height: 100vh;
  width: 100%;
  overflow: auto;
} */
</style>

