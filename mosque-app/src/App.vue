<script setup lang="ts">
import Menu from 'primevue/menu';

</script>

<template>
  <nav class="flex w-full items-center justify-center gap-5 fixed bg-red-300 py-3 ">
    <RouterLink to="/">MMSI Sunday School</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contacts">Contacts</RouterLink>
    <RouterLink to="/lessons">Lessons</RouterLink>
    <RouterLink to="/register">Registeration</RouterLink>
    <button>Login</button>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
