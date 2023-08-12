<template>
    <div class="vpContainer hero-container" @mousemove="updateCursorPoints" @mouseenter="updateCursorSize(size = 'small')"
        @mouseleave="updateCursorSize(size = 'none')">
        <div class="banner-container flexCenter container">
            <div class="flexCenterColumn banner" @mouseenter="updateCursorSize(size = 'large')"
                @mouseleave="updateCursorSize(size = 'small')">
                <div>
                    <h1 class="animated-text" style="--delay: 0s;">Where Creativity</h1>
                </div>
                <div>
                    <h1 class="animated-text" style="--delay: .3s;">never takes</h1>
                </div>
                <div>
                    <h1 class="animated-text" style="--delay: .6s;">a break</h1>
                </div>
            </div>
        </div>
        <div class="banner-hidden-container flexCenter container js-masker" ref="masker">
            <div class="flexCenterColumn banner" @mouseenter="updateCursorSize(size = 'large')"
                @mouseleave="updateCursorSize(size = 'small')">
                <div>
                    <h1>The Studio</h1>
                </div>
                <div>
                    <h1>that Never</h1>
                </div>
                <div>
                    <h1>Rests</h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useMaskerFunctions } from '@/utils/js-masker/masker';
export default {
    setup() {
        const { masker, updateCursorPoints, updateCursorSize } = useMaskerFunctions();
        return {
            updateCursorPoints,
            updateCursorSize,
            masker, // Export the ref so it's accessible in the template
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/utils/js-masker/masker.scss";
@import "@/styles/animations.scss";

.hero-container {
    position: relative;
    font-weight: 500;

}

.banner-container {
    position: relative;
    background-image: url("https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/hero_bg.jpg");
    background-size: cover;
    /* Scale to cover entire container */
    background-position: center bottom;
    /* Position at the top center */
    background-repeat: no-repeat;
    /* Prevent repeating the background */
    mix-blend-mode: darken;
    color: white;

    h1 {
        @extend .slide-up;
        /* Extend the .slide-up class */
    }
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
    width: 50%;
    height: 40%;
    text-transform: capitalize;
}

.banner-hidden-container {
    position: absolute;
    top: 0px;
    z-index: 9;
    left: 0px;
    background-color: #CF5C09;
    color: white // width: 33%
}</style>
  