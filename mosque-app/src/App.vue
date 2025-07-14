<script setup lang="ts">
import Menu from 'primevue/menu';

</script>

<template>
  <nav class="flex w-full items-center justify-center gap-5">
    <h1>MMSI Sunday School</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
