<template>
    <div>
        <!-- <WhyMeComponent /> -->
        <div class="intro-video-container flexCenter position-relative">
            <div class="video-wrapper" ref="videoWrapper">
                <VideoComponent :videoUrl="data.home['brand-works-video']" />
            </div>
        </div>

    </div>
</template>



<script>
import { data } from '@/assets/const.js';
import VideoComponent from '@/components/common/VideoComponent.vue';
export default {
    setup() {
        return {
            data
        };
    },
    components: {
        VideoComponent
    },
};
</script>
 
<style lang="scss" scoped>

.intro-video-container {
    width: 100%;
    height: calc(100vw / 1.91);
    /* Set the height based on the aspect ratio */
    background: black;
    box-sizing: border-box;

    // Vendor-specific prefixes for 'box-sizing'
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    // Vendor-specific prefixes for 'margin'
    -webkit-margin: -1px 0;
    -moz-margin: -1px 0;
    margin: -1px 0;
}

.video-wrapper {
    height: 75%;
    border-radius: 8rem;
    -webkit-border-radius: 8rem;
    -moz-border-radius: 8rem;
    overflow:hidden;
}

@media (max-width: 768px) {

    // Adjust the breakpoint as needed for desktop
    .video-wrapper {
        border-radius: 3rem;
        height: 80%;
        -webkit-border-radius: 3rem;
        -moz-border-radius: 3rem;
    }
}
</style>
