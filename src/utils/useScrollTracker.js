import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollTracker() {
  const scrollY = ref(0);
  const lastScrollY = ref(0); // Added to track the previous scroll position
  const viewportWidth = ref(window.innerWidth);
  const viewportHeight = ref(window.innerHeight);
  const scrollMovement = ref(''); // Initialize as 'NONE'
  const threshold = 3; // Define the threshold value (adjust as needed)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine the scroll movement direction only if the scroll position
    // has changed by at least the threshold amount
    if (Math.abs(currentScrollY - lastScrollY.value) >= threshold) {
      if (currentScrollY > lastScrollY.value) {
        scrollMovement.value = false;      //DOWN meaning HIDE
      } else if (currentScrollY < lastScrollY.value) {
        scrollMovement.value = true;       //UP meaning SHOW
      } else {
        scrollMovement.value = true;
      }
    }

    // Update the scroll position
    scrollY.value = currentScrollY;
    lastScrollY.value = currentScrollY;
  };

  const handleResize = () => {
    viewportWidth.value = window.innerWidth;
    viewportHeight.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });

  return {
    scrollY,
    viewportWidth,
    viewportHeight,
    scrollMovement, // Include scrollMovement in the returned object
  };
}


export function mapRange(value, fromStart, fromEnd, toStart, toEnd) {
  return (value - fromStart) * (toEnd - toStart) / (fromEnd - fromStart) + toStart;
}
// const mappedValue = mapRange(scrollPosition, elementStartPosition, elementEndPosition, rangeStart, rangeEnd); to use
//to use
{/* <template>
  <div>
    <p>Scroll Position: {{ scrollY }} pixels</p>
  </div>
</template>

<script>
import { useScrollTracker } from './useScrollTracker.js'; // Import the composition function

export default {
  setup() {
    const { scrollY } = useScrollTracker(); // Use the composition function to set up the scroll tracker

    return {
      scrollY,
    };
  },
};
</script> */}
