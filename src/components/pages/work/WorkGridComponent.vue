<template>
    <div class="container position-relative">
        <div class="grid">
            <article v-for="(item, index) in urls.work" :key="index" class="position-relative">
                <img :src="item.url" :alt="'Image for ' + item.brand" class="position-relative">
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
.container {
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

.grid>article {}

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

@media (max-width: 768px) {

    /* You can adjust the breakpoint to your preferred mobile width */
    .container {
        padding: 6rem 15% 0 15%;
        box-sizing: border-box;
    }
}
</style>