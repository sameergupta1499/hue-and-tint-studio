<template>
    <navbar class="flexCenter vpW navbar">
        <div class="navbar-logo-container">
            <a href="" class="logo-link ">
                <img src="https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/logo.png?updatedAt=1691862962368"
                    id="logo-img" class= " orange-hover" alt="Logo" />
            </a>
        </div>

        <div class="navbar-navbar">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="(item, index) in navItems" :key="index">
                    <router-link :to="item.route">
                        <h6 class=" orange-hover">{{ item.label }}</h6>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="navbar-menu-container">
            <v-menu>
                <template v-slot:activator="{ props }">
                        <div class="navbar-hamburger-icon  orange-hover" v-bind="props">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                </template>

                <ul class="navbar-list collapsed">
                    <li class="navbar-item" v-for="(item, index) in navItems" :key="index">
                        <router-link :to="item.route" @click="menuOpen = false">
                            <h6 class=" orange-hover">{{ item.label }}</h6>
                        </router-link>
                    </li>
                </ul>
            </v-menu>
        </div>


    </navbar>
</template>
  

<script>
import { ref } from 'vue';

export default {
    setup() {
        const navItems = ref([
            { label: 'HOME', route: '/' },
            { label: 'WORK', route: '/' },
            { label: 'ABOUT', route: '/' },
            { label: 'CONTACT', route: '/' },
        ]);
        return {
            navItems,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/animations.scss";

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
    line-height: 1.2rem;
    background:  #000000;

}
.navbar-item,.navbar-logo-container{
    overflow: visible;
}
.navbar-menu-container {
    display: none;
    color: white;
    position: relative;
}


.navbar-hamburger-icon {
    height: $hamburger-icon-height;
    width: $hamburger-icon-height;

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

    .navbar {
        padding: $navbar-padding-s $x-gutter-s 0 $x-gutter-s;
        line-height: 1.2rem;
    }

    .navbar-navbar {
        display: none;
    }

    .navbar-menu-container {
        display: block;
    }
    .navbar-list.collapsed{
        flex-direction: column;
        align-items:flex-start;
        background-color: rgba(0, 0, 0, 0.4); 
        width:20rem;
        li{
            padding:2rem 1rem;
            line-height: 1.2rem;
        }
    }

}

// Navigation in navbar
.navbar-list {
    display: flex;
    flex-direction: row;

    li {
        margin-left: 2vw;

        a {
            h6{
                font-weight: 300;
                color: white;
            }

        }

    }
}
</style>
