<template>
  <!-- <AppHeader /> -->
  <v-main class="main-content">
    <router-view />
  </v-main>
  <BottomNavigation/>
  <!-- <AppFooter /> -->
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';

</script>

<style scoped lang="scss">
.main-content{
  padding-bottom: 100px;
}
</style>