<template>
    <div>
        <HitMeUpComponent />
        <div class="container contact-container flexCenter">
            <div class="white-color heading-contact fontface-Brandon-Grotesque-Light h4-5">GET IN TOUCH TO CREATE GREAT
                STUFF TOGETHER!</div>
        </div>
        <div class="container contact-container contact-content-container flexCenter margin-jitter">
            <div class="white-color item fontface-Brandon-Grotesque-Light h3-5 flexCenter">
                <a href="" class="brand-img-href">
                    <img src="/linkedin.png" class="img" alt="Logo" />
                </a>
                LinkedIn
            </div>
            <div class="animated-box">
                <h5 class="white-color box item fontface-Brandon-Grotesque-Light">Email: <br />tanyaaacreates@gmail.com</h5>
                <h5 class="white-color hidden-box item fontface-Brandon-Grotesque-Regular">100% I'll read it! <br /><span class="fontface-Brandon-Grotesque-thin font-size-inherit">tanyaaacreates@gmail.com</span></h5>
            </div>
        </div>
        <div class="container contact-container contact-content-container flexCenter">
            <div class="white-color item fontface-Brandon-Grotesque-Light h3-5 flexCenter">
                <a href="" class="brand-img-href">
                    <img src="/linkedin.png" class="img" alt="Logo" />
                </a>
                Instagram
            </div>
            <div class="animated-box">
                <h5 class="white-color item fontface-Brandon-Grotesque-Light">Phone: <br />+91 7710942204</h5>
                <h5 class="white-color hidden-box item fontface-Brandon-Grotesque-Regular">100% I'll read it! <br /><span class="fontface-Brandon-Grotesque-thin font-size-inherit">+91 7710942204</span></h5>
            </div>
        </div>
        <div class="container contact-container contact-developer-container flexCenter margin-jitter">
            <h6 class="white-color item fontface-Brandon-Grotesque-Light flexCenter">
                Designed with ❤️ by <a href="https://www.linkedin.com/in/sameer-gupta-a9531612a" target="_blank"> Sameer Gupta</a></h6>
            <h6 class="white-color item fontface-Brandon-Grotesque-Light">Hue & Tint Studio All Right Reserved.</h6>
        </div>

    </div>
</template>



<script>
import HitMeUpComponent from '@/components/common/HitMeUpComponent.vue';
export default {
    setup() {
        return {
        };
    },
    components: {
        HitMeUpComponent
    }
};
</script>
 

<style lang="scss" scoped>
.img-container {
    // justify-content: flex-start;
    // height: 5rem;
}



.img {
    position: relative;
    // top:4px;
    height: 2.5rem;
    width: auto;
    object-fit: contain;
    padding-right: 1rem;
}

.contact-container {
    background: var(--black);
    box-sizing: border-box;
    padding: .7rem 15% 0 15%;
}

.contact-content-container {
    justify-content: space-between;
}

.contact-developer-container {
    padding-bottom: 5rem;
    padding-top: 2rem;
    justify-content: space-between;

    h6 {
        width:30%;
        a {
            color: white;
            white-space: pre-wrap;
            text-decoration: underline;
        }
    }

    // padding: 5rem 0 25rem 0;
}

.heading-contact {
    letter-spacing: 0.1rem;
    padding-bottom: 2rem;
}

.item {
    // width:30%;
    padding: 1rem 2rem;
    justify-content: flex-start;
    font-weight:300;
}
.hidden-box{
    position:absolute;
    top: 0;
    opacity: 0;
    background:var(--yellow);
    color:black !important;
    width:100%;
    border-radius: 2rem;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    z-index: 1;
}

.animated-box {
    width: 30%;
    position:relative;
}
.hidden-box:hover {
    opacity: 1;
    
}
@media (max-width: 768px) {

/* You can adjust the breakpoint to your preferred mobile width */
.contact-container {
    padding: .7rem 5% 0 5%;
    flex-wrap: wrap;
}
.animated-box {
    width: 50%;
    position:relative;
}
.contact-developer-container {
    h6 {
        width: 50%;
    }
}
}
</style>