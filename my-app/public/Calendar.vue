<template>
  <div>
   
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
const events = ref([])

onMounted(async () => {
const { data:events } = await useSanityQuery(`*[_type == "lesson"]{ title, slug }`)
})


</script>