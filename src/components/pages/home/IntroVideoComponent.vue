<template>
    <div>
        <WhyMeComponent />
        <div class="intro-video-container flexCenter position-relative">
            <div class="video-wrapper" ref="videoWrapper">
                <VideoComponent :videoUrl="urls.home['intro-video']" />
            </div>
        </div>

    </div>
</template>



<script>
import { watch, ref, onMounted } from 'vue';
import { urls } from '@/assets/const.js';
import { setAnimationProgress, useElementLocation } from '@/utils/useElementPosition';
import { useScrollTracker } from '@/utils/useScrollTracker.js';
import WhyMeComponent from '@/components/pages/home/WhyMeComponent.vue';
import VideoComponent from '@/components/common/VideoComponent.vue';
export default {
    setup() {
        const videoWrapper = ref(null);
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        let { pointA, pointB, pointC, pointD, width, height } = useElementLocation(videoWrapper);
        watch([scrollY, pointA], ([scrollValue, pointAValue]) => {
            let scrollPosition = scrollValue;
            let elStartPosOffset = -viewportHeight.value;
            let elStartPosBG = pointAValue.y + elStartPosOffset;
            let elEndPosBG = elStartPosBG + (viewportHeight.value / 2);
            setAnimationProgress(videoWrapper, scrollPosition, elStartPosBG, elEndPosBG);
        });

        return {
            videoWrapper,
            urls
        };
    },
    components: {
        WhyMeComponent,
        VideoComponent
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
    background: black;
    box-sizing: border-box;
    // margin: -1px 0; // to remove the top and bottom line that comes due to background mismatch (glitch)

    // Vendor-specific prefixes for 'box-sizing'
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    // Vendor-specific prefixes for 'margin'
    -webkit-margin: -1px 0;
    -moz-margin: -1px 0;
    margin: -2px 0;
}

.video-wrapper {
    height: 50%;
    border-radius: 8rem;
    will-change: height;
    animation: height-animation 1s linear;
    animation-play-state: paused;
    animation-iteration-count: 1;
    -webkit-animation: height-animation 1s linear;
    -webkit-animation-play-state: paused;
    -webkit-animation-iteration-count: 1;

    // Vendor-specific prefixes for 'border-radius'
    -webkit-border-radius: 8rem;
    -moz-border-radius: 8rem;
    overflow: hidden;
}

@keyframes height-animation {
    100% {
        height: 90%;
        /* Final border radius */
    }
}

@keyframes height-animation-mobile {
    0% {
        height: 70%;
    }

    100% {
        height: 90%;
    }
}

@media (max-width: 768px) {

    // Adjust the breakpoint as needed for desktop
    .video-wrapper {
        border-radius: 3rem;
        height: 70%;
        // animation: height-animation-mobile 1s linear; // Use the desktop-specific keyframe

        // Vendor-specific prefixes for 'border-radius'
        -webkit-border-radius: 3rem;
        -moz-border-radius: 3rem;
    }
}
</style>
