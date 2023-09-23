<template>
  <div id="matter-container">
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue';
import { createBoxElements,init, cleanupMatterSetup} from '@/utils/matter-pills.js';

export default {
  setup() {
    let screenWidth = ref(window.innerWidth); // Initialize with current screen width
    let screenHeight = ref(window.innerHeight); // Initialize with current screen height
    let engine = null;
    let render = null;
    let runner = null;
    let boxList = ['Media Design', 'Video Editing', 'Motion Graphics', 'Digital Campaign Design', 'Social Media Design','Video Editing', 'Motion Graphics', 'Digital Campaign Design', 'Social Media Design', 'Video Editing','Video Editing', 'Motion Graphics', 'Digital Campaign Design', 'Social Media Design', 'Video Editing'];
    // const boxBodyX = ref(box.body.position.x);

    // Function to update screen width and height when the window is resized
    const updateScreenSize = () => {
      screenWidth.value = window.innerWidth;
      screenHeight.value = window.innerHeight;
      // updateWalls(engine,render, runner)
      cleanupMatterSetup(engine, runner);
      createBoxElements(boxList);
      ({ engine, render, runner } = init(screenWidth.value, screenHeight.value));
      // box.init(runner)
    };

    onMounted(() => {
      // Initialize the Matter.js engine with the screen width and height
      createBoxElements(boxList);
      ({ engine, render, runner } = init(screenWidth.value, screenHeight.value));


      // // Add a window resize event listener to keep the screen size updated
      window.addEventListener('resize', updateScreenSize);
    });



  },
};
</script>
<style lang="scss" scoped>

#matter-container {
  position: absolute;
  background: none;
  z-index: 6;
  pointer-events: none;
  background: none !important;
  height: 100%;
  width: 100%;

  // Vendor-specific prefixes for 'background'
  -webkit-background: none;
  -moz-background: none;
  background: none;
}

canvas {
  background: none !important;
  pointer-events: none;

  // Vendor-specific prefixes for 'background'
  -webkit-background: none !important;
  -moz-background: none !important;
  background: none !important;

  // Vendor-specific prefixes for 'pointer-events'
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  pointer-events: none;
}

/* Your CSS styles here */
</style>
