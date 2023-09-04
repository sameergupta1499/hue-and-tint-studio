<template>
    <v-main>
      <NavigationBar />
      <HeroBanner />
      <DummyComponent />
    </v-main>
</template>

<script setup>
import HeroBanner from '@/components/pages/home/HeroBanner.vue'
import DummyComponent from '@/components/common/DummyComponent.vue'
import NavigationBar from '@/components/common/NavigationBar.vue'

</script>
