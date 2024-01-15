<template>
  <TopSectionComponent :imageUrl="workItemForBrand.work_list_hero_img_url" :tasks="workItemForBrand.tasks"
    :timeline="workItemForBrand.timeline" />
  <div class="grid-layout-container container flexCenter">
    <div class="grid-layout-wrapper" ref="gridWrapper" :style="{ width: gridWrapperWidth }">
      <!-- Add a condition to run grid-layout only when width is not zero -->
      <grid-layout v-if="width !== 0" v-model:layout="layout" :col-num="3" :row-height="width / 3" :margin="margin"
        :is-draggable="draggable" :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="false"
        :responsive="true" :preventCollision="true" v-model:responsive-layouts="layouts" :cols="{ md: 3, sm: 1 }"
        :breakpoints="{ md: breakpointValue + 1, sm: breakpointValue }">
        <grid-item v-for="item in layout" :key="item.i" :static="item.static" :x="item.x" :y="item.y" :w="item.w"
          :h="item.h" :i="item.i">
          <img v-if="item.type == 'image'" :src="item.url" alt="Image" />
          <video v-else :id="`${workItemForBrand.id}_${item.i}`" :key="item.i" @click="playVideo(`${workItemForBrand.id}_${item.i}`)" :loop="true" :muted="false" playsInline="true">
            <source :src="item.url" type="video/mp4">
          </video>
          <div class="play-button" @click="playVideo(`${workItemForBrand.id}_${item.i}`)"></div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>
  
  
<script>
import { ref, watch,onUnmounted,onMounted } from 'vue';
import { GridLayout, GridItem } from 'vue3-grid-layout-next';
import { data } from '@/assets/const.js';
import { useElementLocation } from '@/utils/useElementPosition';
import VideoComponent from '@/components/pages/work_list/VideoComponent.vue';
import TopSectionComponent from '@/components/pages/work_list/TopSectionComponent.vue';

export default {
  props: {
    brand: {
      type: String,
      required: true,
    },
  },
  components: {
    GridLayout,
    GridItem,
    VideoComponent,
    TopSectionComponent
  },
  setup(props) {
    const gridWrapperWidth = "65%";
    let breakpointValue = 768 * 0.65 - 2;
    let workItemForBrand = data.work.find(item => item.brand === props.brand);
    const gridWrapper = ref(null);
    const responsive = ref(true);
    const videoElement = ref(null);
    const layout = ref([]); // Define layout as a ref
    const responsiveLayout = ref([]); // Define responsiveLayout as a ref

    let { width } = useElementLocation(gridWrapper);
//////////////////////////////////////////////////VIDEO SECTION START ///////////////////////////////////////////////////
const currentlyPlayingVideo = ref(null);

const playVideo = (videoId) => {
  const elem = document.getElementById(videoId);
  if (elem) {
    if (currentlyPlayingVideo.value === elem) {
      // If the clicked video is the same as the currently playing video, pause it
      if (!elem.paused) {
        elem.pause();
        elem.nextElementSibling.className='play-button'
      }
      currentlyPlayingVideo.value = null; // Set currentlyPlayingVideo to null
    } else {
      // If a different video is clicked, pause the currently playing video (if any)
      if (currentlyPlayingVideo.value) {
        currentlyPlayingVideo.value.pause();
        currentlyPlayingVideo.value.nextElementSibling.className='play-button'
      }
      // Play the clicked video
      elem.play();
      elem.nextElementSibling.className='playing-gif'
      currentlyPlayingVideo.value = elem; // Update currentlyPlayingVideo with the new video
    }
  }
};


    onUnmounted(() => {
      if (videoElement.value) {
        videoElement.value.pause(); // Pause the video
        videoElement.value.removeAttribute('src'); // Remove the video source
        videoElement.value.load(); // Load the video element to clear any resources
      }
    });
//////////////////////////////////////////////////VIDEO SECTION END ///////////////////////////////////////////////////

    const convertToLayout = (data) => {
      const templayout = [];
      const responsiveout = [];
      data.forEach((item, index) => {
        let wValue = item.size === "l" ? 2 : 1;
        let hValue = item.size === "l" ? item.h * 2 * 0.95 : item.h * 0.85;
        const layoutItem = {
          x: index % 3,
          y: 0,
          w: wValue,
          h: hValue,
          i: item.id,
          url: item.url,
          type: item.type,
        };
        const responsiveItem = {
          x: 0,
          y: 0,
          w: 2,
          h: hValue * 3,
          i: item.id,
          url: item.url,
          type: item.type,
        };
        templayout.push(layoutItem);
        responsiveout.push(responsiveItem);
      });
      return { layout: templayout, responsiveLayout: responsiveout };
    };

    // Use the returned object to update the layout and responsiveLayout refs
    const { layout: initialLayout, responsiveLayout: initialResponsiveLayout } = convertToLayout(
      workItemForBrand.work_list_page
    );

    layout.value = initialLayout;
    responsiveLayout.value = initialResponsiveLayout;

    let layouts = {
      md: layout.value,
      sm: responsiveLayout.value,
    };

    let margin = ref([10, 10]);

    watch(width, (newWidth) => {
      margin.value = [newWidth * 0.05, newWidth * 0.05];
      const { layout: newLayout, responsiveLayout: newResponsiveLayout } = convertToLayout(
        workItemForBrand.work_list_page
      );
      layout.value = newLayout;
      responsiveLayout.value = newResponsiveLayout;
      layouts = {
        md: layout.value,
        sm: responsiveLayout.value,
      };
    });

    const draggable = ref(false);
    const resizable = ref(false);

    return {
      layout,
      layouts,
      responsiveLayout,
      gridWrapperWidth,
      gridWrapper,
      draggable,
      resizable,
      width,
      margin,
      responsive,
      breakpointValue,
      workItemForBrand,
      playVideo,
      videoElement
    };
  },
};

</script>
<style lang="scss" scoped>
.grid-layout-container {
  height: 100%;
  background: black;
}

.grid-layout-wrapper {
  height: 100%;
  // background: pink;
}

.vue-grid-item,
img {
  // background: aqua;
  border-radius: 3rem;
  -webkit-border-radius: 3rem;
  -moz-border-radius: 3rem;
  z-index: 2;
  width: 100%;
  position: absolute;
}

img {
  width: 100%;
}
video {
    // width: 100%;
    height: 100%;
    object-fit: cover;
    position:relative;
    /* Maintain aspect ratio and cover container */
  
    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    -webkit-object-fit: cover;
    border-radius: 3rem;
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
  }
// .video-container {
//   position: relative;
// }
.play-button {
  position: absolute;
  top: 3rem;
  left: 3rem;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url('/play.png'); /* Replace with the path to your play button PNG */
  background-size: contain; /* Adjust based on your design */
}

.playing-gif {
  position: absolute;
  top: 3rem;
  left: 3rem;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url('/playing.gif'); /* Replace with the path to your play button PNG */
  background-size: contain; /* Adjust based on your design */
}


  
</style>
  