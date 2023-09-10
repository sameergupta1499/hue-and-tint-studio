import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const scrollY = ref(0);
const viewportWidth = ref(window.innerWidth);
const viewportHeight = ref(window.innerHeight);

export function useScrollTracker() {
  let ticker;

  let handleScroll = () => {
    scrollY.value = -window.scrollY;
  };

  let handleResize = () => {
    viewportWidth.value = window.innerWidth;
    viewportHeight.value = window.innerHeight;
  };

  onMounted(() => {
    // Initialize GSAP ticker
    gsap.ticker.add(() => {
      handleScroll();
      handleResize();
    });

    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    // Remove GSAP ticker
    gsap.ticker.remove(ticker);

    window.removeEventListener('resize', handleResize);
  });

  return {
    scrollY,
    viewportWidth,
    viewportHeight,
  };
}


//when no gsap was there
// import { ref, onMounted, onBeforeUnmount } from 'vue';
// const scrollY = ref(0);
// const viewportWidth = ref(window.innerWidth);
// const viewportHeight = ref(window.innerHeight);

// export function useScrollTracker() {


//   let handleScroll = () => {
//     scrollY.value = window.scrollY;
//   };

//   let handleResize = () => {
//     viewportWidth.value = window.innerWidth;
//     viewportHeight.value = window.innerHeight;
//   };

//   onMounted(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//   });

//   onBeforeUnmount(() => {
//     window.removeEventListener('scroll', handleScroll);
//     window.removeEventListener('resize', handleResize);
//   });

//   return {
//     scrollY,
//     viewportWidth,
//     viewportHeight,
//   };
// }


// export function mapRange(value, fromStart, fromEnd, toStart, toEnd) {
//   return (value - fromStart) * (toEnd - toStart) / (fromEnd - fromStart) + toStart;
// }
// // const mappedValue = mapRange(scrollPosition, elementStartPosition, elementEndPosition, rangeStart, rangeEnd); to use
// //to use
// {/* <template>
//   <div>
//     <p>Scroll Position: {{ scrollY }} pixels</p>
//   </div>
// </template>

// <script>
// import { useScrollTracker } from './useScrollTracker.js'; // Import the composition function

// export default {
//   setup() {
//     const { scrollY } = useScrollTracker(); // Use the composition function to set up the scroll tracker

//     return {
//       scrollY,
//     };
//   },
// };
// </script> */}

