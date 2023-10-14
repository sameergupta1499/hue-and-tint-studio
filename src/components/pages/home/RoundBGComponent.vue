<template>
    <div class="project-slide position-relative overflow-visible" :style="{ background: topColor }">
        <div class="container-wrapper overflow-visible position-relative container">
            <div class="background-round position-absolute " ref="backgroundCircle"
                :style="{ background: backgroundColor }"></div>
            <div class="background-square position-absolute vpW" :style="{ background: backgroundColor }"></div>
            <div class="content overflow-visible position-relative ">
                <div class="card-container">
                    <a :href="page_url"><div class="cards-wrapper card-wrapper-left" ref="cardLeft">
                        <img :src="leftCardUrl">
                    </div></a>
                    <a :href="page_url"><div class="cards-wrapper card-wrapper-right" ref="cardRight">
                        <img :src="rightCardUrl" />
                    </div></a>
                </div>
                <div class="card-content flexCenterColumn position-relative" ref="cardContent">
                     <a :href="page_url"><h5 class="card-count card-content-line" :style="{ color: textColor }">0{{ number }}</h5></a>
                     <a :href="page_url"><h2 class="card-title card-content-line fontface-antonio" :style="{ color: textColor }">{{ title }}</h2></a>
                     <a :href="page_url"><h4 class="card-description card-content-line" :style="{ color: textColor }" v-html="description"></h4></a>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { watch, ref, onMounted } from 'vue';
  import { setAnimationProgress, useElementLocation } from '@/utils/useElementPosition';
  import { useScrollTracker } from '@/utils/useScrollTracker.js';
  export default {
    props: {
        leftCardUrl: String,
        number: Number,
        rightCardUrl: String,
        topColor: String,
        backgroundColor: String,
        textColor: String,
        title: String,
        description: String,
        page_url:String,
    },
    setup() {
        const backgroundCircle = ref(null);
        const cardLeft = ref(null);
        const cardRight = ref(null);
        const cardContent = ref(null);
        let { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        let { pointA, pointB, pointC, pointD, width, height } = useElementLocation(backgroundCircle);
        watch([scrollY, pointA], ([scrollValue, pointAValue]) => {
            let scrollPosition = scrollValue;
            let elStartPosOffset = -20;
            let elStartPosBG = pointAValue.y + elStartPosOffset;
            let elEndPosBG = elStartPosBG + height.value / 4;
            setAnimationProgress(backgroundCircle, scrollPosition, elStartPosBG, elEndPosBG);
            let elStartPosCard = pointAValue.y + elStartPosOffset - viewportHeight.value;
            let elEndPosCard = pointAValue.y + viewportHeight.value;
            setAnimationProgress(cardLeft, scrollPosition, elStartPosCard, elEndPosCard);
            setAnimationProgress(cardRight, scrollPosition, elStartPosCard, elEndPosCard);
            setAnimationProgress(cardContent, scrollPosition, elStartPosCard, elEndPosCard);
        });
  
  
        return {
            backgroundCircle,
            cardLeft,
            cardRight,
            cardContent
        };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  $padding-slide-padding-top: 5vh;
  $card-width: 45vw;
  $card-width-768: 33vw;
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
  
  .background-round {
    // background-color: rgb(255, 230, 153);
    border-radius: 50%;
    height: 100vw;
    width: 100vw;
    will-change: border-radius;
    animation: border-radius-animation 1s linear;
    animation-play-state: paused;
    animation-iteration-count: 1;
  
    // Vendor-specific prefixes for 'border-radius'
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
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
    height: calc(calc(50vw) + 2px);
  }
  
  img {
    width: 100%;
    /* Set image width to 100% of the card */
    height: 100%;
    /* Ensure the image covers the entire card */
    object-fit: cover;
    border-radius: 20px;
  
    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    object-fit: cover;
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
        transform: translate3d(0px, -50%, 0px) rotate(-10deg);
    }
  
    70% {
        transform: translate3d(0px, -70%, 0px) rotate(-10deg);
    }
  
    100% {
        transform: translate3d(0px, -120%, 0px) rotate(-13deg);
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
        transform: translate3d(0px, -30%, 0px) rotate(3deg);
    }
  
    75% {
        transform: translate3d(0px, -40%, 0px) rotate(6deg);
    }
  
    100% {
        transform: translate3d(0px, -70%, 0px) rotate(8deg);
    }
  }
  
  @media (max-width: 768px) {
    .cards-wrapper {
        width: calc($card-width * .85);
    }
  
    .card-wrapper-left {
        left: calc(50vw - ($card-width-768 * 1));
    }
  
    .card-wrapper-right {
        left: calc(50vw - ($card-width-768 / 10));
    }
  }
  
  // @media (max-width: 321px) {
  //     .card-content {
  //         padding-top: 14rem;
  //     }
  // } IN PROGRESS
  
  @media (min-width: 768px) {
    .cards-wrapper {
        width: $card-width-992;
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
    opacity: 1;
    animation: contentOpacityAnimation 1s ease-out infinite;
    animation-play-state: paused;
    animation-iteration-count: 1;
    margin: 1px 0px;
  
  }
  
  @keyframes contentOpacityAnimation {
    70% {
        opacity: 1;
    }
  
    90% {
        opacity: 0;
    }
  
    100% {
        opacity: 0;
    }
  }
  
  .card-content-line {
    padding-bottom: 1.5rem;
  }
  
  span {
    font-family: inherit;
    font-size: inherit;
  }</style>
  