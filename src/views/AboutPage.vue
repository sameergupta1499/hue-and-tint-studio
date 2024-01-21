<template>
  <v-main>
    <NavigationBar v-if="scrollbar !== null" />
    <div id="scroll-wrapper">
      <div id="scroll-container-parent">
        <div id="scroll-container" v-if="scrollbar !== null">
          <div class="about-page">
            <AboutHeadingComponent heading="BEHIND THE PIXELS" 
            subheading="A Little About Me" 
            image="/batman.png" 
            />
            <AboutBannerComponent />
            <AboutHeadingComponent heading="WHAT'S INSIDE THE TOOLBOX?" 
            subheading="Services I Offer" 
            image="/batman.png" 
            />
            <AboutContentComponent />
            <ContactComponent />
          </div>

        </div>
      </div>
    </div>

  </v-main>
</template>
<script>
import { onMounted, provide, ref } from 'vue';
import DummyComponent from '@/components/common/DummyComponent.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import AboutHeadingComponent from '@/components/pages/about/AboutHeadingComponent.vue';
import AboutBannerComponent from '@/components/pages/about/AboutBannerComponent.vue';
import AboutContentComponent from '@/components/pages/about/AboutContentComponent.vue';
import ContactComponent from '@/components/common/ContactComponent.vue';
import { init } from '@/utils/smoothScroll.js';
export default {
  setup() {
    const scrollbar = ref(null);
    onMounted(() => {
      scrollbar.value = init("scroll-wrapper");
    });
    provide('scrollbar', scrollbar)
    return {
      scrollbar
    };
  },
  components: {
    NavigationBar,
    DummyComponent,
    AboutHeadingComponent,
    AboutBannerComponent,
    ContactComponent,
    AboutContentComponent
  },
};
</script>
<style scoped>
#scroll-wrapper {
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.about-page {
  background: var(--black);
}
</style>
  
  