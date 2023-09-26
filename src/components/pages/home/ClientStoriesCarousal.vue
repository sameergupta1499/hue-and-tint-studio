<template>
    <div class="container position-relative content-section">
        <div class="container heading-wrapper">
            <h3 class="fontface-antonio display-content">CLIENT STORIES</h3>
        </div>
    </div>
    <div class="container position-relative testimonial-section margin-jitter">
        <div class="container flexCenterColumn">
            <div class="testimonial-content">
                <h5 class="display-content fontface-Brandon-Grotesque-Regular">Testimonial</h5>

            </div>
        </div>
    </div>
    <div class="carousel-wrapper">
        <Carousel :autoplay="4000" :slideWidth="4000" :wrap-around="true" :items-to-show="itemsToShow" snap-align="center"
            @slide-start="handleEvents" @slide-end="handleEvents">
            <Slide v-for="slide in 5" :key="slide">
                <h5 class="carousel__item">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum laudantium culpa perspiciatis ad exercitationem animi quas obcaecati doloribus,
                    odit laborum. Ipsum, nostrum qui? Aspernatur dolorum enim iste ullam, quas
                    illo!<br/><br/>
                    - Tina Vellore, Titan
                </h5>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>
  
<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Basic",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            isSmallScreen: window.innerWidth <= 768,
        };
    },
    computed: {
        itemsToShow() {
            return this.isSmallScreen ? 1 : 2;
        },
    },
    methods: {
        handleEvents(data) {
            // Handle your slide events here
            // alert(`current slide: ${data.currentSlideIndex}`);
        },
        onResize() {
            this.isSmallScreen = window.innerWidth <= 768;
        },
    },
    mounted() {
        window.addEventListener("resize", this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.onResize);
    },
});
</script>


<style lang="scss" scoped>
$gradient-width: 20%;
$gradient-intensity: 1;

.testimonial-section {
    background: var(--black);
    padding-bottom:.1rem;
}

.testimonial-content{
    background: var(--yellow);
    padding: 0.4rem 2.7rem;
    border-radius: 7rem;
}
.content-section {
    margin: -1px 0;
    

}

.content-section {
    background:var(--black);
    text-align: center;
    padding:3.5rem 0 1rem;
    // margin-top: 2px;
}
.heading-wrapper{
    h3{
        color:white;
        padding:.1rem 0;
    }
}
.content-wrapper{
    padding:1.5rem 0 1rem;
    h5{
        color:white;
        overflow:visible;
    }
}

.carousel {
    overflow: visible;
    padding-top: 3rem;
    background: var(--black)
}

.carousel__item {
    min-height: 150px;
    padding: 0 1rem;
    width: 100%;
    background-color: var(--black);
    color: #fff;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 0 5rem;
}

@media (max-width: 768px) {
    .carousel__slide {
        padding: 0 0;
    }

    section.carousel::before,
    section.carousel::after {
        content: "";
        background: none;
    }
}

.carousel__pagination {
    list-style: none !important;
    background: var(--black);
    padding-top: 3rem;
}

.carousel__pagination-item {
    margin-top: 0 !important;
}

.carousel__track {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding: 0 !important;
    /* margin : !important;  */
}

.carousel__slide {
    margin-top: 0 !important;
}



/*tint effect*/
.carousel-wrapper {
    position: relative;
    overflow: hidden;
    padding: 0 5rem 2rem 5rem;
    background: black;
}

.carousel::before,
.carousel::after {
    content: "";
    position: absolute;
    top: 0;

    height: 100%;
    width: $gradient-width;
    /* Adjust the width as needed */
    z-index: 1;
}

.carousel::before {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, $gradient-intensity), transparent);
}

.carousel::after {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, $gradient-intensity), transparent);
}
</style>
