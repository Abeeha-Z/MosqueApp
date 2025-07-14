<script setup lang="ts">
import Menu from 'primevue/menu';

</script>

<template>
  <nav class="flex w-full items-center justify-center gap-5 fixed  py-7 ">
    <RouterLink class="font-bold text-[120%]" to="/">MMSI Sunday School</RouterLink>
    <RouterLink class="font-bold text-[120%]" to="/about">About</RouterLink>
    <RouterLink class="font-bold text-[120%]" to="/contacts">Contacts</RouterLink>
    <RouterLink class="font-bold text-[120%]" to="/lessons">Lessons</RouterLink>
    <RouterLink class="font-bold text-[120%]" to="/register">Registeration</RouterLink>
    <button class="font-bold text-[120%] py-2 px-5 bg-amber-400 rounded-2xl">Login</button>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
