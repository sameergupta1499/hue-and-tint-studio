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
          <img class='image' v-if="item.type == 'image'" :src="item.url" alt="Image" />
          <img class='thumbnail' v-else :id="`${workItemForBrand.id}_${item.i}_thumbnail`" :src="getThumbnailUrl(item.url)" alt="Thumbnail" @click="playVideo(`${workItemForBrand.id}_${item.i}`)" />
            <video :id="`${workItemForBrand.id}_${item.i}`" :key="item.i" @click="playVideo(`${workItemForBrand.id}_${item.i}`)" :loop="true" :muted="false" playsInline="true" preload="none">
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
    const gridWrapperWidth = "75%";
    let breakpointValue = 768 * 0.75 - 2;
    let workItemForBrand = data.work.find(item => item.brand === props.brand);
    const gridWrapper = ref(null);
    const responsive = ref(true);
    const videoElement = ref(null);
    const layout = ref([]); // Define layout as a ref
    const responsiveLayout = ref([]); // Define responsiveLayout as a ref

    let { width } = useElementLocation(gridWrapper);
//////////////////////////////////////////////////VIDEO SECTION START ///////////////////////////////////////////////////
  const getThumbnailUrl = (videoUrl) => {
        // Assuming the thumbnail URL follows a specific pattern
        return videoUrl.replace('.mp4', '_thumbnail.jpg');
      };


const currentlyPlayingVideo = ref(null);

const playVideo = (videoId) => {
  const elem = document.getElementById(videoId);
  const thumbnail = document.getElementById(videoId+'_thumbnail');
  if (elem) {
    //hidding the thumnail once a video has been played. 
    thumbnail.style.display='none'
    if (currentlyPlayingVideo.value === elem) {
      // If the clicked video is the same as the currently playing video, pause it
      if (!elem.paused) {
        elem.pause();
        elem.style.filter= ''
        elem.nextElementSibling.className='play-button'
      }
      currentlyPlayingVideo.value = null; // Set currentlyPlayingVideo to null
    } else {
      // If a different video is clicked, pause the currently playing video (if any)
      if (currentlyPlayingVideo.value) {
        currentlyPlayingVideo.value.pause();
        currentlyPlayingVideo.value.style.filter= ''
        currentlyPlayingVideo.value.nextElementSibling.className='play-button'
      }
      // Play the clicked video
      elem.play();
      elem.style.filter='brightness(100%)' //make it bright
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
        // let wValue = item.size === "l" ? 2 : 1;
        // let hValue = item.size === "l" ? item.h * 2 * 0.95 : item.h * 0.85;
        let wValue = item.size.startsWith("l") ? 3 : 1;
        let hValue = item.size.startsWith("l") ? item.h * 3 : item.h * 1;
        index = item.size.startsWith("l") ? 0 : item.id-1;
        const layoutItem = {
          x: index % 3,
          y: 0,
          w: wValue,
          h: hValue,
          i: item.id,
          url: item.url,
          type: item.type,
        };
        hValue = item.size.startsWith("l") ? item.h * 1 : item.h * 1;    // for responsive we ddon't want thrice the size of value since there are only 1 column
        const responsiveItem = {
          x: 0,
          y: 0,
          w: 3,
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
      console.log(width.value,newWidth,"width")
      margin.value = [newWidth*0.03,0];
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
      videoElement,
      getThumbnailUrl
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
.image {
  // background: aqua;
  border-radius: 1.5rem;
  -webkit-border-radius: 1.5rem;
  -moz-border-radius: 1.5rem;
  z-index: 3;
  width: 100%;
  position: absolute;
}

img {
  width: 100%;
}
video {
    width: 100%;
    // height: 100%;
    object-fit: cover;
    position:relative;
    /* Maintain aspect ratio and cover container */
  
    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    -webkit-object-fit: cover;
    border-radius: 1.5rem;
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
    filter: brightness(55%);
  }
.thumbnail{
    width: 100%;
    // height: 100%;
    object-fit: cover;
    position:relative;
    /* Maintain aspect ratio and cover container */
  
    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    -webkit-object-fit: cover;
    border-radius: 1.5rem;
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
    filter: brightness(55%);
  }

.play-button {
  position: absolute;
    top: 1.75rem;
    left: 2.5rem;
    transform: translate(-50%, -50%);
    width: 3.5rem;
    height: 1.75rem;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url('/play.jpg');
    background-size: contain;
    z-index: 2;
    border-radius: 1.5rem;
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
}

.playing-gif {
  position: absolute;
  top: 1.75rem;
    left: 2.5rem;
    transform: translate(-50%, -50%);
    width: 3.5rem;
    height: 1.75rem;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url('/playing.gif'); /* Replace with the path to your play button PNG */
  background-size: contain; /* Adjust based on your design */
  z-index: 2;
  border-radius: 1.5rem;
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
}

@media (max-width: 768px) {
  .play-button,.playing-gif{
    top: 2.25rem;
    left: 3.5rem;
    transform: translate(-50%, -50%);
    width: 5rem;
    height: 2.5em;
  }
}

  
</style>
  