<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">SELECTED <span class="yellow-color fontface-antonio font-size-inherit">GOOD
                        WORK</span></h3>
            </div>
        </div>
        <RoundBGComponent v-for="(item, index) in brandData" :key="index" :number="index + 1" :title="item.title"
            :description="item.description" :topColor="item.top_color" :backgroundColor="item.background_color"
            :textColor="item.text_color" :leftCardUrl="item.left_card_url" :rightCardUrl="item.right_card_url" :page_url="item.page_url"/>
    </div>
</template>

<script>
import RoundBGComponent from '@/components/pages/home/RoundBGComponent.vue';
import { getCSSVariableValue } from '@/utils/utils';
import { data,getWorkBrandData } from '@/assets/const.js';


export default {
    setup() {
        const brandData = [
            {
                "title": getWorkBrandData('titan')['brand'],
                "description": getWorkBrandData('titan')['tasks'],
                "top_color": getCSSVariableValue('--black'),
                "background_color": getCSSVariableValue('--yellow'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": data.home['first-card-left'],
                "right_card_url": data.home['first-card-right'],
                "page_url":getWorkBrandData('titan')['page-url'],
            },
            {
                "title": getWorkBrandData('secret_alchemist')['brand'],
                "description": getWorkBrandData('secret_alchemist')['tasks'],
                "top_color": getCSSVariableValue('--yellow'),
                "background_color": getCSSVariableValue('--semi-white'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": data.home['second-card-left'],
                "right_card_url": data.home['second-card-right'],
                "page_url": getWorkBrandData('secret_alchemist')['page-url'],
            },
            {
                "title": getWorkBrandData('the_pink_foundry')['brand'],
                "description": getWorkBrandData('the_pink_foundry')['tasks'],
                "top_color": getCSSVariableValue('--semi-white'),
                "background_color": getCSSVariableValue('--black'),
                "text_color": getCSSVariableValue('--white'),
                "left_card_url": data.home['third-card-left'],
                "right_card_url": data.home['third-card-right'],
                "page_url": getWorkBrandData('the_pink_foundry')['page-url'],
            }
        ]
        return {
            brandData,
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