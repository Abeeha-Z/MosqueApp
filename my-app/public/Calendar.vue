<template>
  <div>
   
  </div>
</template>

<script lang="ts" setup>
import {sanity} from 

const events = ref([])

onMounted(async () => {
  events.value = await sanity.fetch(`*[_type == "Calender_event"] | order(date asc)`)
})

//need to access sanity schemas, create shared directory, use root path (~~?), or define sanity client inside nuxt as specified in sanity docs

</script>