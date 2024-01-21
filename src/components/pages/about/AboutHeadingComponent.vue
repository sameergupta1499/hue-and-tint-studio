<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">{{ heading }}</h3>
            </div>
        </div>
        <div class="container position-relative testimonial-section margin-jitter">
            <div class="container flexCenterColumn">
                <div class="testimonial-content flexCenter">
                    <h5 class="display-content fontface-Brandon-Grotesque-Regular">
                        {{ subheading }}
                        <div class="brand-img-container">
                            <a href="" class="brand-img-href container">
                                <img :src="image" class="brand-img" alt="Logo" />
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
    props: {
        heading: String,
        subheading: String,
        image: String,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.content-section {
    background: var(--black);
    text-align: center;
    padding: 15vh 0 1rem;
}

.heading-wrapper {
    h3 {
        color: white;
    }
}

.testimonial-section {
    background: var(--black);
    padding-bottom: 0.1rem;
    padding-top: 1rem;
}

.testimonial-content {
    background: var(--yellow);
    padding: 0.4rem 2.7rem;
    border-radius: 7rem;
}

.brand-img-container {
    justify-content: flex-start;
}

.brand-img {
    height: 2rem;
    margin-left: 0.7rem;
    width: auto;
    object-fit: contain;
}
</style>
