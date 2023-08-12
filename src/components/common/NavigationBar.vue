<template>
    <navbar class="flexCenter vpW navbar">
        <div class="navbar-logo-container">
            <a href="" class="logo-link">
                <img src="@/assets/logo.png" id="logo-img" alt="Logo" />
            </a>
        </div>

        <div class="navbar-navbar">
            <ul class="navbar-list">
                <li class="navbar-item"><router-link to="/"><h6>HOME</h6></router-link></li>
                <li class="navbar-item"><router-link to="/"><h6>ABOUT</h6></router-link></li>
                <li class="navbar-item"><router-link to="/"><h6>CONTACT</h6></router-link></li>
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
$paddingLeftRight: 4vh;
$heightMax: 8vh;
$logoHeight: 6vh;

.navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    min-height: $heightMax;
    margin: 0;
    padding: 0 $paddingLeftRight 0 $paddingLeftRight;
    justify-content: space-between;
    box-sizing: border-box;
}

.navbar-container {
    display: flex;
}

//Logo in navbar
.navbar-logo-container {
    // width: calc($heightMax / 2);
    height: $logoHeight;
    margin-top: 1vh;
}

#logo-img {
    height: 100%; /* Set the image height to fill the container */
    width: auto; /* Let the width adjust based on aspect ratio */
    object-fit: contain; /* Preserve aspect ratio, fit inside without cropping */
}

// Navigation in navbar
.navbar-list {
  display: flex;
  flex-direction: row;
  li{
    margin-left: 3vh;
    a{
        color:white;
    }
    
  }
}
</style>
