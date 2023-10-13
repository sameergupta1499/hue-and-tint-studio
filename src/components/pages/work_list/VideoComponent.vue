<template>
  <video ref="videoElement" @click="playVideo">
    <source :src="videoUrl" type="video/mp4">
  </video>
</template>

<script>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

export default {
  props: {
    videoUrl: String, // Prop to receive the video URL
  },
  setup() {
    const videoElement = ref(null); // Create a ref for the video element

    const playVideo = () => {
      if (videoElement.value) {
        if (videoElement.value.paused) {
          videoElement.value.play(); // Play the video if it's paused
        } else {
          videoElement.value.pause(); // Pause the video if it's playing
        }
      }
    };

    onMounted(() => {
      if (videoElement.value) {
        videoElement.value.loop = true; // Set loop to true
        videoElement.value.muted = false; // Set muted to true
        videoElement.value.playsInline = true; // Set playsinline to true

        // You can apply any additional video setup or behavior here if needed
      }
    });

    onUnmounted(() => {
      if (videoElement.value) {
        videoElement.value.pause(); // Pause the video
        videoElement.value.removeAttribute('src'); // Remove the video source
        videoElement.value.load(); // Load the video element to clear any resources
      }
    });

    return {
      videoElement, // Expose the video element ref
      playVideo, // Expose the playVideo function
    };
  },
};
</script>

  
  <style lang="scss" scoped>
  /* Add your styles here */
  
  video {
    // width: 100%;
    height: 100%;
    object-fit: cover;
    /* Maintain aspect ratio and cover container */
  
    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    -webkit-object-fit: cover;
    border-radius: 3rem;
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
  }
  
  </style>
  