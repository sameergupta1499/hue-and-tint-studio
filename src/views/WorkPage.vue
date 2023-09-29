<template>
  <v-main>
    <NavigationBar v-if="scrollbar !== null" />
    <div id="scroll-wrapper">
      <div id="scroll-container-parent">
        <div id="scroll-container" v-if="scrollbar !== null">
          <div class="work-page">
            <WorkHeadingComponent />
            <WorkGridComponent />
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
import WorkHeadingComponent from '@/components/pages/work/WorkHeadingComponent.vue';
import WorkGridComponent from '@/components/pages/work/WorkGridComponent.vue';
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
    WorkHeadingComponent,
    WorkGridComponent,
    ContactComponent
  },
};
</script>
<style scoped>
#scroll-wrapper {
  height: 100vh;
  width: 100%;
  overflow: auto;
}
.work-page {
  background: var(--black);
}
</style>

