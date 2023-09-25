<template>
    <div class="flexCenter vpW navbar transform-default" :class="{ 'navbar-hide': isNavbarHidden }" ref="navbarRef">
        <div class="navbar-navbar">
            <ul class="navbar-list">
                <li class="navbar-item margin-left" v-for="(item, index) in leftNavItems" :key="index">
                    <router-link :to="item.route">
                        <h6 class=" orange-hover">{{ item.label }}</h6>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="navbar-logo-container">
            <a href="" class="logo-link ">
                <img src="https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/logo.png"
                    id="logo-img" class="orange-hover" alt="Logo" />
            </a>
        </div>
        <div class="navbar-navbar">
            <ul class="navbar-list">
                <li class="navbar-item margin-right" v-for="(item, index) in rightNavItems" :key="index">
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


    </div>
</template>
  

<script>
import { watch, ref, computed } from 'vue';
import { useScrollTracker } from '@/utils/useScrollTracker.js';
export default {
    setup() {
        const { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        const navbarRef = ref(null)
        const isNavbarHidden = ref(false);
        let prevScrollY = 0;
        const navItems = ref([
            { label: 'HOME', route: '/' },
            { label: 'WORK', route: '/' },
            { label: 'ABOUT', route: '/' },
            { label: 'CONTACT', route: '/' },
        ]);

        const leftNavItems = computed(() => {
            return navItems.value.slice(0, 2);
        });

        const rightNavItems = computed(() => {
            return navItems.value.slice(2);
        });
        const navState = ref("NONE")
        let accumulatedScroll = 0;

watch(scrollY, (newValue) => {
    const threshold = 200;

    // Calculate the difference in scroll position
    const scrollDifference = newValue - prevScrollY;

    // Check if the user is scrolling up
    if (scrollDifference < 0) {
        accumulatedScroll += Math.abs(scrollDifference);
    } else {
        accumulatedScroll = 0;
    }

    if (accumulatedScroll >= threshold || newValue === 0) {
        isNavbarHidden.value = false; // Show the navbar
    } else {
        isNavbarHidden.value = true; // Hide the navbar
    }

    prevScrollY = newValue;
});



        return {
            navItems,
            leftNavItems,
            rightNavItems,
            navState,
            navbarRef,
            isNavbarHidden
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/animations.scss";

$logoHeight: 9vh;

.navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    min-height: $navbar-height-l;
    margin: 0;
    padding: ($navbar-padding-l*.6) $x-gutter-l (
        $navbar-padding-l*.6) $x-gutter-l;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 1.2rem;
    background: #000000;
    transition: top 0.5s ease-out;

    // Vendor-specific prefixes for 'transition'
    -webkit-transition: top 0.5s ease-out;
    -moz-transition: top 0.5s ease-out;
    transition: top 0.5s ease-out;
}

.navbar-hide {
    top: - $navbar-height-l - ($navbar-padding-l * 2);

}

.navbar-item,
.navbar-logo-container {
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
    height: $logoHeight;
    padding: calc($navbar-padding-l * 0.7);
    position: absolute;
    left: calc(50% + calc($navbar-padding-l * 0.7));
    -webkit-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7))); /* Safari and Chrome */
    -moz-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7))); /* Firefox */
    -ms-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7))); /* IE */
    -o-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7))); /* Opera */
    transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
}

#logo-img {
    height: 100%;
    width: auto;
    object-fit: contain;
}

@media (max-width: 768px) {
    .navbar-logo-container {
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

    .navbar-list.collapsed {
        flex-direction: column;
        align-items: flex-start;
        background-color: rgba(0, 0, 0, 0.4);
        width: 20rem;

        li {
            padding: 2rem 1rem;
            line-height: 1.2rem;
        }
    }

}

// Navigation in navbar
.navbar-list {
    display: flex;
    flex-direction: row;

    li {
        a {
            h6 {
                font-weight: 300;
                color: white;
            }

        }

    }
}

.margin-right {
    margin-right: 2vw;
}

.margin-left {
    margin-left: 2vw;
}
</style>
