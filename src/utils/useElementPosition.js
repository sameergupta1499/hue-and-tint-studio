import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useIntersectionObserver(elementToTrack, intersectionCallback) {
  const pointA = ref({ x: 0, y: 0 });
  const pointB = ref({ x: 0, y: 0 });
  const pointC = ref({ x: 0, y: 0 });
  const pointD = ref({ x: 0, y: 0 });

  const width = ref(0);
  const height = ref(0);

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Assuming there's only one element to track
      if (entry.isIntersecting) {
        const rect = entry.target.getBoundingClientRect();

        pointA.value = { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
        pointB.value = { x: rect.right + window.scrollX, y: rect.top + window.scrollY };
        pointC.value = { x: rect.right + window.scrollX, y: rect.bottom + window.scrollY };
        pointD.value = { x: rect.left + window.scrollX, y: rect.bottom + window.scrollY };

        width.value = rect.width;
        height.value = rect.height;
      }
    });

    if (elementToTrack.value) {
      observer.observe(elementToTrack.value);
    }
  });

  onBeforeUnmount(() => {
    const observer = new IntersectionObserver(() => {});
    if (elementToTrack.value) {
      observer.unobserve(elementToTrack.value);
    }
  });

  return {
    pointA,
    pointB,
    pointC,
    pointD,
    width,
    height,
  };
}

//to use 
{/* <template>
    <div>
      <!-- Element to track -->
      <div ref="elementToTrack">Element to Track</div>
  
      <!-- Display element's points and dimensions -->
      <p>A: {{ pointA.x }}, {{ pointA.y }}</p>
      <p>B: {{ pointB.x }}, {{ pointB.y }}</p>
      <p>C: {{ pointC.x }}, {{ pointC.y }}</p>
      <p>D: {{ pointD.x }}, {{ pointD.y }}</p>
      <p>Width: {{ width }}</p>
      <p>Height: {{ height }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useIntersectionObserver } from '@/utils/centralizedElementPositions'; // Import the composition function
  
  export default {
    setup() {
      const elementToTrack = ref(null);
  
      // Use the composition function to set up Intersection Observer
      const { pointA, pointB, pointC, pointD, width, height } = useIntersectionObserver(
        elementToTrack,
        (entries) => {
          // Intersection Observer callback function
          // You can add your custom logic here if needed
        }
      );
  
      return {
        elementToTrack,
        pointA,
        pointB,
        pointC,
        pointD,
        width,
        height,
      };
    },
  };
  </script>
   */}