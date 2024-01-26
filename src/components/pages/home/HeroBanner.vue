<template>
    <div class="vpContainer hero-container" @mousemove="updateCursorPoints" @mouseenter="updateCursorSize(size = 'small')"
        @mouseleave="updateCursorSize(size = 'none')" :style="{ background: heroContainerBgColor }">
        <MatterPills />
        <div class="banner-container flexCenter container">
            <!-- <div class="flexCenterColumn banner"> -->
            <div class="flexCenterColumn banner" @mouseenter="updateCursorSize(size = 'large')"
                @mouseleave="updateCursorSize(size = 'small')">
                <div class="overflow-visible">
                    <!-- creating good designs since 2018 graphic designer & founder -->
                    <h2 class="animated-text fontface-antonio" style="--delay: 0s;">CREATING</h2>
                </div>
                <div class="middle-text-container overflow-visible">
                    <h1 class="animated-text  yellow-color fontface-fortune" style="--delay: .3s;">Good Designs</h1>
                </div>
                <div class="overflow-visible">
                    <h2 class="animated-text fontface-antonio" style="--delay: .6s;">SINCE 2020</h2>
                </div>
                <div class="overflow-visible last-text-container">
                    <h5 class="animated-text fontface-antonio" style="--delay: .9s;">FREELANCE GRAPHIC DESIGNER</h5>
                </div>
            </div>
        </div>
        <div class="banner-hidden-container flexCenter container js-masker"
            :style="{ background: bannerHiddenContainerBgColor }" ref="masker">
            <div class="flexCenterColumn banner">
                <div class="overflow-visible">
                    <h2 class="animated-text fontface-antonio">HIDING</h2>
                </div>
                <div class="middle-text-container overflow-visible">
                    <h1 class="animated-text fontface-fortune">Bad Designs</h1>
                </div>
                <div class="overflow-visible">
                    <h2 class="animated-text fontface-antonio">SINCE 2020</h2>
                </div>
                <div class="overflow-visible flexCenter last-text-container">
                    <h5 class="animated-text fontface-antonio" style="--delay: .9s;">CHIEF COFFEE DRINKER</h5>
                        <div class="brand-img-container">
                            <a href="" class="brand-img-href container">
                                <img src="/coffee.png" class="brand-img" alt="Logo" loading="eager" crossorigin="anonymous"/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useMaskerFunctions } from '@/utils/js-masker/masker';
import MatterPills from '@/components/common/MatterPills.vue';
import { getCSSVariableValue } from '@/utils/utils';
import { useScrollTracker } from '@/utils/useScrollTracker.js';
export default {
    setup() {
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        // console.log(scrollY)
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
    color: white;

    .animated-text {
        // @extend .tilt-shaking;
        @extend .slide-up;
        color: white;
        /* Extend the .slide-up class */
    }
}

.animated-text {
    text-transform: capitalize;
    overflow: visible;
    font-weight:600;
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

    // Vendor-specific prefixes for 'background-color'
    -webkit-background-color: rgba(0, 0, 0, 0.5);
    -moz-background-color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
}

.banner {
    // font-size: 3rem;
    flex: none;
    text-transform: capitalize;
    margin: calc(20vh) 0;
    position: relative;
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

    // Vendor-specific prefixes for 'pointer-events'
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none;
}

.middle-text-container {
    line-height: .7;
    /* --delay: .3s; */
    overflow: visible;
    h1{
        font-weight:300;

    }
}

.last-text-container {
    margin-top: 2rem;
    h5{
        letter-spacing: 3px;
    }
}
.brand-img-container {
    justify-content: flex-start;
}
.brand-img {
    height: 4rem;
    margin-left: 0.7rem;
    width: auto;
    object-fit: contain;
    transform: translate(-20%, -55%);
    position: absolute;
}
</style>
