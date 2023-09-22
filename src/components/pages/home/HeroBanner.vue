<template>
    <div class="vpContainer hero-container" @mousemove="updateCursorPoints" @mouseenter="updateCursorSize(size = 'small')"
        @mouseleave="updateCursorSize(size = 'none')" :style="{ background: heroContainerBgColor }">
        <MatterPills />
        <div class="banner-container flexCenter container">
            <!-- <div class="flexCenterColumn banner"> -->
            <div class="flexCenterColumn banner" @mouseenter="updateCursorSize(size = 'large')"
                @mouseleave="updateCursorSize(size = 'small')">
                <div>
                    <h1 class="animated-text " style="--delay: 0s;">PRESENT      YOUR</h1>       
                </div> 
                <div>
                    <h1 class="animated-text " style="--delay: .3s;">BRAND      WITH</h1>
                </div>
                <div>
                    <h1 class="animated-text " style="--delay: .6s;">CONFIDENCE</h1>
                </div>
            </div>
        </div>
        <div class="banner-hidden-container flexCenter container js-masker"
            :style="{ background: bannerHiddenContainerBgColor }" ref="masker">
            <div class="flexCenterColumn banner">
                <div>
                    <h1 class="animated-text">WITH</h1>
                </div>
                <div>
                    <h1 class="animated-text">BETTER</h1>
                </div>
                <div>
                    <h1 class="animated-text">DESIGNS</h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useMaskerFunctions } from '@/utils/js-masker/masker';
import MatterPills from '@/components/common/MatterPills.vue';
import { getCSSVariableValue } from '@/utils/utils';
import { useScrollTracker} from '@/utils/useScrollTracker.js';
export default {
    setup() {
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        console.log(scrollY)
        const { masker, updateCursorPoints, updateCursorSize } = useMaskerFunctions(scrollY);
        const heroContainerBgColor = getCSSVariableValue("--black");
        const bannerHiddenContainerBgColor = getCSSVariableValue("--yellow");

        // Function to set the width of the hidden container
        return {
            updateCursorPoints,
            updateCursorSize,
            heroContainerBgColor,
            bannerHiddenContainerBgColor,
            masker, // Export the ref so it's accessible in the template
        };
    },
    components: {
        MatterPills,
    },
};
</script>

<style lang="scss" scoped>
@import "@/utils/js-masker/masker.scss";
@import "@/styles/animations.scss";
@import "@/styles/variables.scss";

.hero-container {
    position: relative;

}

.banner-container {
    position: relative;
    color:white;
    // background-image: url("https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/hero_bg.jpg");
    // background-size: cover;
    /* Scale to cover entire container */
    // background-position: center bottom;
    /* Position at the top center */
    // background-repeat: no-repeat;
    /* Prevent repeating the background */
    // mix-blend-mode: darken;

    h1 {
        // @extend .tilt-shaking;
        @extend .slide-up;
        color:white;
        /* Extend the .slide-up class */
    }
}

.animated-text{
    text-transform: capitalize;

}
.banner-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Black tint with 50% opacity */
    z-index: -1;
    /* Behind the content */
}

.banner {
    // font-size: 3rem;
    flex: none;
    text-transform: capitalize;
    margin: calc(20vh) 0;
    /* Use your font-family name */
    // width: 47rem; //change this for the width manipulation
    // flex: 1;
}

@media (max-width: 768px) {

    /* You can adjust the breakpoint to your preferred mobile width */
    .banner {
        margin: 0 calc($x-gutter-s);
        max-width: calc(100vw - calc(2*$x-gutter-s));
        // width: 33rem;
    }
}

.banner-hidden-container {
    position: absolute;
    top: 0px;
    z-index: 9;
    left: 0px;
    // background-color: var(--alabaster);
    color: white; // width: 33%
    pointer-events: none;
}</style>
  