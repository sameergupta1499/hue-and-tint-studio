<template>
    <div class="intro-video-container flexCenter position-relative" >
        <div class="video-wrapper" ref="videoWrapper">
            <video autoplay loop muted playsinline>
                <source src="https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/Intro-video.mp4"
                    type="video/mp4">
                <!-- Your browser does not support the video tag. -->
            </video>
        </div>
    </div>
</template>



<script>
import { watch, ref, onMounted } from 'vue';
import { setAnimationProgress, useElementLocation } from '@/utils/useElementPosition';
import { useScrollTracker} from '@/utils/useScrollTracker.js';
export default {
    setup() {
        const videoWrapper = ref(null);
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        let { pointA, pointB, pointC, pointD, width, height } = useElementLocation(videoWrapper);
        
        watch(scrollY, (newValue) => {
            let scrollPosition = newValue;
            let elStartPosOffset = -viewportHeight.value;    
            let elStartPosBG = pointA.value.y + elStartPosOffset;
            let elEndPosBG = elStartPosBG + (viewportHeight.value/2);
            console.log(scrollPosition, pointA.value.y, width.value, height.value );
            console.log(setAnimationProgress(videoWrapper, scrollPosition, elStartPosBG, elEndPosBG));
        });
        return {
            videoWrapper
        };
    },
};
</script>
 
<style lang="scss" scoped>
// $padding-slide-padding-top: 5vh;
// .intro-video-container {
//     width: 100vw;
//     height: 52.36vw; //depends on the aspect ratio. Explicitly set the height 
//     background:pink;
// }

.intro-video-container {
    width: 100%;
    height: calc(100vw / 1.91);
    /* Set the height based on the aspect ratio */
    background: var(--alabaster);
    box-sizing: border-box;
}

.video-wrapper {
    height: 50%;
    border-radius: 8rem;
    will-change: height;
    animation: height-animation 1s linear;
    animation-play-state: paused;
    animation-iteration-count: 1;
}
@keyframes height-animation {
    0% {
        height: 50%;
    }

    100% {
        height: 90%;
        /* Final border radius */
    }
}

.video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Maintain aspect ratio and cover container */
}</style>
