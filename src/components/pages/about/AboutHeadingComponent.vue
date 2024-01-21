<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">BEHIND THE PIXELS</h3>
                </div>
        </div>
        <div class="container position-relative testimonial-section margin-jitter">
            <div class="container flexCenterColumn">
                <div class="testimonial-content flexCenter">
                    <h5 class="display-content fontface-Brandon-Grotesque-Regular">
                        A little about me
                        <div class="brand-img-container">
                                <a href="" class="brand-img-href container">
                                    <img src="/batman.png" class="brand-img" alt="Logo" />
                                </a>
                        </div>
                    </h5>
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
.brand-img-container {
    justify-content: flex-start;
    // height: 5rem;
}

.brand-img {
    height: 2rem;
    margin-left: 0.7rem;
    width: auto;
    object-fit: contain;
}

</style>