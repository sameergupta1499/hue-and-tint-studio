<template>
  <v-main>
      <NavigationBar />
      <div id="scroll-wrapper">
        <HeroBanner />
        <VideoComponent />
        <PortfolioComponent />

    </div>

  </v-main>
</template>
<script>
import { onMounted, ref } from 'vue';
import HeroBanner from '@/components/pages/home/HeroBanner.vue';
import DummyComponent from '@/components/common/DummyComponent.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import PortfolioComponent from '@/components/pages/home/PortfolioComponent.vue';
import VideoComponent from '@/components/pages/home/VideoComponent.vue';
import { init } from '@/utils/smoothScroll.js';
export default {
  setup() {
    init("scroll-wrapper");

    return {
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

