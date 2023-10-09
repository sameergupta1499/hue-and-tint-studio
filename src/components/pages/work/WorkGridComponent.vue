<template>
    <div class="grid-container position-relative">
        <div class="grid">
            <article v-for="(item, index) in urls.work" :key="index" class="position-relative">
                <div class="image-container position-relative">
                    <img :src="item.url" :alt="'Image for ' + item.brand" class="position-relative">
                    <div class="hover-text container">
                        <div class="hover-content container flexCenterColumn">
                            <div class="h5-6 white-color fontface-Brandon-Grotesque-Medium hover-header">What I Did:</div>
                            <div class="h5-6 white-color fontface-Brandon-Grotesque-Light hover-task">{{ item.tasks }}</div>
                            <div class="hover-button-container">
                                <a href="www.google.com">
                                    <div class="h5-6 hover-button fontface-Brandon-Grotesque-Medium">Let's Explore</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text">
                    <div class="white-color h4-5 fontface-Brandon-Grotesque-Medium flexCenter">{{ item.brand }}</div>
                    <h6 class="white-color fontface-Brandon-Grotesque-Light flexCenter">{{ item.category }}</h6>
                </div>

            </article>
        </div>
    </div>
</template>
<script>
import { urls } from '@/assets/const.js';
export default {
    setup() {
        return {
            urls
        }
    },
}
</script>

<style lang="scss" scoped>
.grid-container {
    padding: 5rem 10% 0 10%;
    box-sizing: border-box;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(25%, 250px), 1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 10%;
    align-items: stretch;
}

.image-container {
    transition: transform .3s ease-in-out;
    transform-origin: center bottom;
}

.image-container:hover {
    transform: scale(1.05);
    .hover-text{
        opacity:1;
    }
}


.grid>article img {
    max-width: 100%;
    border-radius: 3rem;
    transition: transform .3s ease-in-out;
}

.grid .text {
    padding: 1.2rem;
    font-weight: 300;

    div {
        font-weight: 300;
    }

    h6 {
        font-weight: 300;
        padding-top: .2rem;
    }
}

.hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
      opacity: 0;
    // pointer-events: none;
    transition: opacity 0.3s ease-in-out;
}

.hover-content {
    align-items: flex-start;
    padding: 0 7%;

    .hover-task {
        font-weight: 300;
        padding: .4rem 0 1.2rem;
    }

    .hover-button-container {
        background: var(--yellow);
        padding: 0.5rem 1.5rem;
        border-radius: 10px;
        position:relative;
        z-index: 10;
    }

    .hover-button-container:hover {
        cursor: pointer;
    }
}

@media (max-width: 768px) {

    /* You can adjust the breakpoint to your preferred mobile width */
    .grid-container {
        padding: 6rem 15% 0 15%;
        box-sizing: border-box;
    }
}</style>