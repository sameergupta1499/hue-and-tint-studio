<template>
    <div class="service-container container">
        <div class="service-row-container flexCenter container" v-for="(item, index) in about_data" :key="index">
            <div class="service-img"><img :src="item.url" alt=""></div>

            <div class="service-content-container">
                <div class="heading-container">
                    <h4 class="fontface-antonio yellow-color heading-text">{{ item.heading }}:</h4>
                </div>
                <div class="content-container">
                    <div class="h5-6 content-text white-color">{{ item.content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { about_data } from '@/assets/const.js';
export default {
    setup() {
        return {
            about_data
        }
    },
}
</script>

<style lang="scss" scoped>
$width_box : 30%;
$width-box-min: calc(768*.30); //change this when you change width_box
$middle-margin: 4%;

.service-container{
    margin-top:5rem;
}
.service-row-container {
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.service-img {
    width: $width_box;
    margin: 0 $middle-margin 0 0;

    min-width: $width-box-min;

    img {
        // background: aqua;
        border-radius: 2.5rem;
        -webkit-border-radius: 2.5rem;
        -moz-border-radius: 2.5rem;
        z-index: 2;
        width: 100%;
    }

}

.service-content-container {
    width: $width_box;
    color: white;
}

.service-row-container:nth-child(even) {
    .service-img {
        order: 2;
        margin: 0 0 0 $middle-margin;

    }

    .service-content-container {
        order: 1;
    }
}

.heading-container {
    margin-bottom: 1.5rem;
}

.content-text {
    letter-spacing: 2.5px;
    line-height: 1.9rem;
    text-align: justify;
    font-weight: 800;
}
.heading-text{
    text-transform: uppercase;
}

@media (max-width: 768px) {

    /* You can adjust the breakpoint to your preferred mobile width */
    .service-content-container,
    .service-img {
        margin: 0;
        margin-top:2rem;

        width: 60%;
    }
    .content-text {
    letter-spacing: 1.5px;
    line-height: 1.9rem;
}

    .service-row-container:nth-child(even) {
        .service-img {
            order: 1;
        }

        .service-content-container {
            order: 2;
        }
    }

    .end-margin {
        min-height: 2rem;
    }
}</style>