<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">LET'S EXPLORE <span
                        class="yellow-color fontface-antonio font-size-inherit">GOOD
                        DESIGNS</span></h3>
            </div>
        </div>
        <div class="container position-relative testimonial-section margin-jitter">
            <div class="container flexCenterColumn">
                <div class="testimonial-content">
                    <h5 class="display-content fontface-brandon-grotesque-Medium">Client Work</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.content-section {
    background: var(--black);
    text-align: center;
    padding: 9rem 0 1rem;
}

.heading-wrapper {
    h3 {
        color: white;
    }
}

.testimonial-section {
    background: var(--black);
    padding-bottom: .1rem;
    padding-top: 1rem;
}

.testimonial-content {
    background: var(--yellow);
    padding: 0.4rem 2.7rem;
    border-radius: 7rem;
}
</style>