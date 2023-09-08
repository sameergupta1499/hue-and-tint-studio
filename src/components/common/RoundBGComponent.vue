<template>
    <div class="project-slide position-relative">
        <div class="container-wrapper position-relative container">
            <div class="background-round position-absolute" ref="elementToTrack" :style="{ '--radius': radius }"></div>
            <div class="background-square position-absolute vpW"></div>
            <div class="content container">
                <!-- <a href="/works/bangs" class="cards-wrapper d-flex justify-content-center position-relative z-2"
                    data-v-1c712198=""><span class="indented" data-v-1c712198="">Bangs</span>

                </a> -->
            </div>
        </div>
    </div>
</template>
  
<script>
import { watch, ref } from 'vue';
import { useIntersectionObserver } from '@/utils/useElementPosition';
import { useScrollTracker, mapRange } from '@/utils/useScrollTracker.js';
export default {
    setup() {
        const elementToTrack = ref(null);
        const radius = ref("50%");
        const { scrollY, viewportWidth, viewportHeight, scrollMovement } = useScrollTracker();
        const { pointA, pointB, pointC, pointD, width, height } = useIntersectionObserver(
            elementToTrack,
            (entries) => {
                // Intersection Observer callback function
                // You can add your custom logic here if needed
            }
        );
        // Watch the scrollY value and perform actions based on it
        watch(scrollY, (newValue) => {
            let scrollPosition = newValue
            let elementStartPositionOffset = -20;
            let elementStartPosition = pointA.value.y + elementStartPositionOffset;
            let elementEndPosition = elementStartPosition + (height.value / 5);
            let rangeStart = 50; // Starting point of the desired range
            let rangeEnd = 1;   // Ending point of the desired range
            if (scrollPosition >= elementStartPosition && scrollPosition <= elementEndPosition) {
                const mappedValue = mapRange(scrollPosition, elementStartPosition, elementEndPosition, rangeStart, rangeEnd);
                // console.log("here", mappedValue.toFixed(), radius.value);
                radius.value = `${mappedValue.toFixed()}%`;
            }

            else if (scrollPosition < pointD.value.y) {
                radius.value = '0%';
            }
            if (scrollPosition < elementStartPosition) {
                radius.value = '50%';
            }
        });


        return {
            elementToTrack,
            pointA,
            pointB,
            pointC,
            pointD,
            width,
            height,
            radius
        };
    },
};
</script>
  
<style lang="scss" scoped>$padding-slide-padding-top: 10vh;

.project-slide {
    background: pink;
    padding-top: $padding-slide-padding-top;
    height:100vh;
}

.content-wrapper {
    padding-top: 10vh;
}

.background-round {
    // background-color: rgb(255, 230, 153);
    background-color: red;
    --radius: 50%;
    border-radius: var(--radius);
    height: 100vw;
    width: 100vw;
    transition: border-radius 0.1s ease;
}

.background-square {
    background-color: rgb(255, 230, 153);
    top: calc(50vw );
    height: 200vw;
}</style>
