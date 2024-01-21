<template>
    <div class="freelance-heading position-relative flexCenterColumn">
        <div class="flow-animation-container position-absolute">
            <div class="flow_animation">
                <div class="continuous-text fontface-antonio">FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER FREELANCER
                    FREELANCER
                </div>
            </div>
        </div>
        <div class="freelance-img-container position-relative ">
            <img :src="imageUrl"
                @mouseover="changeImage('https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/about/tanya.gif?updatedAt=Latest')"
                @mouseout="changeImage('https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/about/tanya.jpg?updatedAt=Latest')"
                alt="image-freelancer">
        </div>
        <!-- <div class="freelance container position-relative content-section margin-jitter"></div> -->
    </div>
</template>



<script>
import { ref } from 'vue';

export default {

    setup() {
        const imageUrl = ref("https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/about/tanya.jpg?updatedAt=Latest");
        const changeImage = (newImageUrl) => {
            imageUrl.value = newImageUrl;
        };

        return {
            imageUrl,
            changeImage,
        };
    },
};
</script>
 

<style lang="scss" scoped>
.freelance-heading {
    width: 100%;
    height: 100%;
    margin-top: 5rem;

}

.freelance-img-container {
    width: 30%;

    img {
        // background: aqua;
        border-radius: 2.5rem;
        -webkit-border-radius: 2.5rem;
        -moz-border-radius: 2.5rem;
        z-index: 2;
        width: 100%;
    }
}

.content-section {
    background: black;
    padding-bottom: 2rem;
}

.flow-animation-container {
    overflow: hidden;
    top: 23%;
    left: 0;
    width: 100%;
    /* Limit the width to 100% of the screen */
    overflow: hidden;
}

.flow_animation {
    display: inline-block;
    /* Apply animation to this element */
    animation: scrolling-left1 350s linear infinite;
}

.continuous-text {
    white-space: nowrap;
    /* Ensure text doesn't wrap to a new line */
    color: var(--grey);
    font-size: 15rem;
}

@keyframes scrolling-left1 {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>
