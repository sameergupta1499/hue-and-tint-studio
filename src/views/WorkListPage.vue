<template>
  <v-main>
    <NavigationBar v-if="scrollbar !== null" />
    <div id="scroll-wrapper">
      <div id="scroll-container-parent">
        <div id="scroll-container" v-if="scrollbar !== null">
          <div class="work-page">
            <NavigationBar />
            <WorkListGridComponent :brand="brand"/>
            <ContactComponent />
          </div>

        </div>
      </div>
    </div>

  </v-main>
</template>
<script>
import { onMounted, provide, ref } from 'vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import WorkListGridComponent from '@/components/pages/work_list/WorkListGridComponent.vue'
import ContactComponent from '@/components/common/ContactComponent.vue';
import { init } from '@/utils/smoothScroll.js';
export default {
  props: {
    brand: {
      type: String,
      required: true,
    },
  },

  setup(props) {
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
    WorkListGridComponent,
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

