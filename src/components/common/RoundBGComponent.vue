<template>
    <div class="project-slide position-relative overflow-visible" :style="{ background: topColor }">
        <div class="container-wrapper overflow-visible position-relative container">
            <div class="background-round position-absolute " ref="backgroundCircle" :style="{ background: backgroundColor }" ></div>
            <div class="background-square position-absolute vpW" :style="{ background: backgroundColor }"></div>
            <div class="content overflow-visible position-relative ">
                <div class="card-container">
                    <div class="cards-wrapper card-wrapper-left" ref="cardLeft">
                        <img :src="leftCardUrl">
                    </div>
                    <div class="cards-wrapper card-wrapper-right" ref="cardRight">
                        <img :src="rightCardUrl"/>
                    </div>
                </div>
                <div class="card-content flexCenterColumn position-relative ">
                    <h4 class="card-count card-content-line">1/5</h4>
                    <h1 class="card-title card-content-line">{{ title }}</h1>
                    <h6 class="card-description card-content-line">{{ description }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { watch, ref, onMounted } from 'vue';
import { setAnimationProgress, useElementLocation } from '@/utils/useElementPosition';
import { useScrollTracker} from '@/utils/useScrollTracker.js';
export default {
    props: {
    leftCardUrl: String,
    rightCardUrl: String,
    topColor: String,
    backgroundColor: String,
    title: String,
    description: String,
  },
    setup() {
        const backgroundCircle = ref(null);
        const cardLeft = ref(null);
        const cardRight = ref(null);
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        let { pointA, pointB, pointC, pointD, width, height } = useElementLocation(backgroundCircle);
        // Watch the scrollY value and perform actions based on it

        onMounted(() => {
            let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
            let { pointA, pointB, pointC, pointD, width, height } = useElementLocation(backgroundCircle);
        });

        watch(scrollY, (newValue) => {
            let scrollPosition = newValue;
            let elStartPosOffset = -20;
            let elStartPosBG = pointA.value.y + elStartPosOffset;
            let elEndPosBG = elStartPosBG + (height.value / 4);
            setAnimationProgress(backgroundCircle, scrollPosition, elStartPosBG, elEndPosBG);

            let elStartPosCard = pointA.value.y + elStartPosOffset - (viewportHeight.value); //we want to start the animation moment circle is visible
            let elEndPosCard = pointA.value.y + viewportHeight.value;
            // console.log( scrollPosition, elStartPosCard, elEndPosCard,pointA.value.y)
            setAnimationProgress(cardLeft, scrollPosition, elStartPosCard, elEndPosCard)
            setAnimationProgress(cardRight, scrollPosition, elStartPosCard, elEndPosCard)
        });


        return {
            backgroundCircle,
            cardLeft,
            cardRight
        };
    },
};
</script>
 
<style lang="scss" scoped>
$padding-slide-padding-top: 5vh;
$card-width: 45vw;
$card-width-812: 33vw;
$card-width-992: 21vw;


.project-slide {
    padding-top: $padding-slide-padding-top;
    // height: auto;
    overscroll-behavior: none;
    // height:100vh;
}

.container-wrapper {
    padding-top: $padding-slide-padding-top;
}
// .content{
//     height: calc(200vw - 100vh);
//     min-height: 50vw;
//     max-height: 200vw;
//     // background:grey;
// }
.background-round {
    // background-color: rgb(255, 230, 153);
    border-radius: 50%;
    height: 100vw;
    width: 100vw;
    will-change: border-radius;
    animation: border-radius-animation 1s linear;
    animation-play-state: paused;
    animation-iteration-count: 1;
}
@keyframes border-radius-animation {
    0% {
        border-radius: 50%;
    }

    100% {
        border-radius: 0%;
        /* Final border radius */
    }
}

.background-square {
    top: calc(calc(50vw + #{$padding-slide-padding-top}) - 2px);

    height: 200vw;
    // background:grey !important;
}
// @media (min-aspect-ratio: 1/1) {
//   .background-square {
//     height: 0;
//   }
// }
img {
    width: 100%;
    /* Set image width to 100% of the card */
    height: 100%;
    /* Ensure the image covers the entire card */
    object-fit: cover;
    border-radius: 20px;
}

.card-container {
    padding-top: 7vw;
    
    display: flex;
}

.cards-wrapper {
    position: absolute;
    width: $card-width;
    z-index: 20;
    // transition: transform .4s;
    // top:-20vh;
}

.card-wrapper-left {
    transform: translate3d(0px, 0, 0px) rotate(10deg);
    // transform: translate(0px, -180%) rotate(-20deg);
    left: calc(50vw - ($card-width/1.3));
    animation: cardLeftAnimation 1s ease-out infinite;
    animation-play-state: paused;
    animation-iteration-count: 1;
}
@keyframes cardLeftAnimation {
    0% {
        transform: translate3d(0px, 50%, 0px) rotate(10deg);
    }
    20% {
        transform: translate3d(0px, -20%, 0px) rotate(-6deg);
    }
    50% {
        transform: translate3d(0px, -55%, 0px) rotate(-10deg);
    }
    100% {
        transform: translate3d(0px, -180%, 0px) rotate(-18deg);
    }
}

.card-wrapper-right {
    transform: translate3d(0px, 0, 0px) rotate(10deg);
    left: calc(50vw);
    animation: cardRightAnimation 1s ease-out infinite;
    animation-play-state: paused;
    animation-iteration-count: 1;
    z-index: 19;
}
@keyframes cardRightAnimation {
    0% {
        transform: translate3d(0px, 70%, 0px) rotate(16deg);
    }
    20% {
        transform: translate3d(0px, -5%, 0px) rotate(12deg);
    }
    50% {
        transform: translate3d(0px, -35%, 0px) rotate(3deg);
    }
    100% {
        transform: translate3d(0px, -180%, 0px) rotate(16deg);
    }
}

@media (min-width: 768px) {
    .cards-wrapper {
        width: calc($card-width - 12vw);
        // left:4%;
    }

    .card-wrapper-left {
        left: calc(50vw - ($card-width-812/1.5));
    }
    .card-wrapper-right {
        left: calc(50vw);
    }
}

@media (min-width: 992px) {
    .cards-wrapper {
        width: calc($card-width - 24vw);
    }

    .card-wrapper-left {
        left: calc(50vw - ($card-width-992/1.5));
    }
    .card-wrapper-right {
        left: calc(50vw);
    }
}

.card-content {
    padding-top: 20rem;
    padding-bottom: 5rem;
}
.card-content-line{
    padding-bottom:1.5rem;
}
</style>
