<template>
    <div class="container position-relative content-section margin-jitter">
        <div class="flow-animation-container">
            <div class="flow_animation">
                <div class="continuous-text fontface-antonio">HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME
                    UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP?
                    HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT
                    ME UP?
                    HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT
                    ME UP?
                    HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? HIT
                    ME UP?
                    HIT ME UP? HIT ME UP? HIT ME UP? HIT ME UP? </div>
            </div>
        </div>

    </div>
</template>



<script>
export default {
    setup() {
        return {
        };
    },
};
</script>
 

<style lang="scss" scoped>
.content-section {
    background: black;
    padding-bottom: 2rem;
}
.flow-animation-container {
    
  width: 100%; /* Limit the width to 100% of the screen */
  overflow: hidden;
}
.flow_animation {
    display: inline-block;
    /* Apply animation to this element */
    animation: scrolling-left1 350s linear infinite;
}

.continuous-text {
    white-space: nowrap;
    /* Ensure text doesn't wrap to a new line */
    color: var(--grey);
    font-size: 15rem;
    padding-bottom: 1rem;

}

@keyframes scrolling-left1 {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}</style>
