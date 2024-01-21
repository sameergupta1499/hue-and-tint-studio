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
    <div class="intro-text-container flexCenter container">
        <div class="intro-header flexCenterColumn ">
                    <h5 class=" intro-header-text white-color fontface-brandon-grotesque-Medium">HI THERE!</h5>
                    <h5 class=" intro-content-text white-color"><span class="fontface-brandon-grotesque-Medium intro-content-text font-size-inherit  font-family-inherit white-color">I am Tanya Verma, the creative force behind Hue & Tint Studio.</span> With four years of design experience, including two years as a freelancer, I am passionate about product animation and social media design. My heart beats for the beauty and cosmetic space, where I craft visuals that captivate. When you collaborate with me, you're partnering with a designer who infuses passion and creativity into every project, making your brand stand out in the digital world.</h5>
                </div>
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
.intro-text-container{
    margin: 3rem 0;
}
.intro-header-text{
    font-weight: 500;
    margin: 0 0 2.5rem 0;
}
.intro-content-text{
    width: 80%;
    letter-spacing: 1.5px;
    line-height: 1.9rem;
    text-align: justify;
    text-align-last: center;
    span{
        font-style: italic;
    }
}
.freelance-heading {
    width: 100%;
    height: 100%;
    margin-top: 3rem;

}

.freelance-img-container {
    width: 30rem;   //twice of freelancer moving animation text size

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
