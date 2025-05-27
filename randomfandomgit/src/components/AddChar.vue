<script setup>
import { ref } from 'vue'
import { useStore } from 'pinia'
import TagInput from './TagInput.vue'

defineProps({
   tagtype: String,
})

function submit_profile () {

}


</script>

<template>
  <div>
    <form v-on:submit="submit_profile">
      <p>Character Name: <input type="text" required></p>
      <TagInput tagtype="physical_traits"/>
      <TagInput tagtype="person_traits"/>
    </form>
  </div>
</template>

<style scoped>

</style>
