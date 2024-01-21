<template>
    <div class="container image-container flexCenter">
        <div class="conatiner image-wrapper">
            <img :src="imageUrl" alt="ProductListHeroImage" />
        </div>
    </div>

    <div class="container info-container-wrapper flexCenter">
        <div class="container info-container flexCenter position-relative">
            <div class="position-absolute container separation-line"></div>
            <div class="info-tab-left flexCenterColumn">
                <h5 class="white-color fontface-brandon-grotesque-Medium">Project Type:</h5>
                <h5 class="white-color fontface-brandon-grotesque-Light">{{ tasks }}</h5>
            </div>
            <div class="info-tab-right flexCenterColumn">
                <h5 class="white-color fontface-brandon-grotesque-Medium">Date</h5>
                <h5 class="white-color fontface-brandon-grotesque-Light">{{ timeline }}</h5>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

export default {
    props: {
        imageUrl: String, // Prop to receive the video URL
        tasks: String, // Prop to receive the video URL
        timeline: String, // Prop to receive the video URL
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
@import "@/styles/variables.scss";

.image-container {
    padding-top: calc($navbar-height-l + 7vh);
    padding-bottom:3rem;
}
.info-container-wrapper {
    padding-bottom:4rem;
}
.info-container {
    line-height: 1.4;
    background: #ffffff26;
    padding: 1.2rem 1rem 1.5rem;
    width:50%;
    justify-content:space-around;
    border-radius: 1rem;
}
.info-tab-right{
    margin-left:20%;
}
.info-tab-right,
.info-tab-left {
    align-items: flex-start;
}

.separation-line{
    position: absolute;
    left: 50%; /* Position in the center horizontally */
    top: 15%;
    width: 1px;
    height: 70%;
    background-color: white; /* Line color */
    transform: translateX(-50%); /* Center the line horizontally */
}
.image-wrapper {
    width: 70%;
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    -webkit-object-fit: cover;
    border-radius: 3rem;
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
}

@media (max-width: 768px) {
    .image-container {
        padding-top: calc($navbar-height-l + 5vh);
    }
}</style>
    