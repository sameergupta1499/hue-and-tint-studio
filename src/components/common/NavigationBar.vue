<template>
    <navbar class="flexCenter vpW navbar">
        <div class="navbar-logo-container">
            <a href="" class="logo-link">
                <img src="https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/logo.png?updatedAt=1691862962368"
                    id="logo-img" alt="Logo" />
            </a>
        </div>

        <div class="navbar-navbar">
            <ul class="navbar-list">
                <li class="navbar-item"><router-link to="/">
                        <h6>HOME</h6>
                    </router-link></li>
                <li class="navbar-item"><router-link to="/">
                        <h6>WORK</h6>
                    </router-link></li>
                <li class="navbar-item"><router-link to="/">
                        <h6>ABOUT</h6>
                    </router-link></li>
                <li class="navbar-item"><router-link to="/">
                        <h6>CONTACT</h6>
                    </router-link></li>
            </ul>
        </div>
    </navbar>
</template>
  
<script>
export default {
    setup() {
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

$logoHeight: 6vh;

.navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    min-height: $navbar-height-l;
    margin: 0;
    padding: $navbar-padding-l $x-gutter-l 0 $x-gutter-l;
    justify-content: space-between;
    box-sizing: border-box;
}

//Logo in navbar
.navbar-logo-container {
    // width: calc($navbar-height-l / 2);
    height: $logoHeight;
}

#logo-img {
    height: 100%;
    /* Set the image height to fill the container */
    width: auto;
    /* Let the width adjust based on aspect ratio */
    object-fit: contain;
    /* Preserve aspect ratio, fit inside without cropping */
}

@media (max-width: 768px) {
    .navbar-logo-container {
        // width: calc($navbar-height-l / 2);
        height: $logoHeight-s;

    }
    .navbar{
        padding: $navbar-padding-s $x-gutter-s 0 $x-gutter-s;
        line-height: 1.2rem;
    }
}

// Navigation in navbar
.navbar-list {
    display: flex;
    flex-direction: row;

    li {
        margin-left: 2vw;

        a {
            color: white;
        }

    }
}</style>
