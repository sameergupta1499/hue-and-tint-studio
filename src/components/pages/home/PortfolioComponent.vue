<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">SELECTED <span class="yellow-color fontface-antonio font-size-inherit">GOOD
                        WORK</span></h3>
            </div>
        </div>
        <RoundBGComponent v-for="(item, index) in data" :key="index" :number="index + 1" :title="item.title"
            :description="item.description" :topColor="item.top_color" :backgroundColor="item.background_color"
            :textColor="item.text_color" :leftCardUrl="item.left_card_url" :rightCardUrl="item.right_card_url" />
    </div>
</template>

<script>
import RoundBGComponent from '@/components/pages/home/RoundBGComponent.vue';
import { getCSSVariableValue } from '@/utils/utils';
import { data } from '@/assets/const.js';

export default {
    setup() {
        const data = [
            {
                "title": "TITAN",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--black'),
                "background_color": getCSSVariableValue('--yellow'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": data.home['first-card-left'],
                "right_card_url": data.home['first-card-right'],
            },
            {
                "title": "SECRET ALCHEMIST",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--yellow'),
                "background_color": getCSSVariableValue('--almond'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": data.home['second-card-left'],
                "right_card_url": data.home['second-card-right'],
            },
            {
                "title": "ASA BEAUTY",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--almond'),
                "background_color": getCSSVariableValue('--black'),
                "text_color": getCSSVariableValue('--white'),
                "left_card_url": data.home['third-card-left'],
                "right_card_url": data.home['third-card-right'],
            }
        ]
        return {
            data,
        }
    },
    components: {
        RoundBGComponent,
    },
}
</script>

<style lang="scss" scoped>
.content-section {
    background: var(--black);
    text-align: center;
    padding: 3.5rem 0 1rem;
}

.heading-wrapper {
    h3 {
        color: white;
    }
}
</style>