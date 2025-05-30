<script setup>
import { reactive, ref } from 'vue'
import { useStore } from '../stores/store.js'
import TagInput from './TagInput.vue'
import SelectInput from './SelectInput.vue'

defineProps({
   tagtype: String,
})

const store = useStore()

// template profile
const char_profile = reactive({
  first_name: "",
  last_name: "",
  physical_traits: [],
  person_traits: [],
  fandom: "",
  arro_level: 0
})

// updating store, adding character profile
function submit_profile () {
  console.log("submitted")
  console.log(char_profile)
  store.characters.push(char_profile)
  console.log(store.characters)
  char_profile.physical_traits = []
  char_profile.person_traits = []

}

function update_tags (tags, tagtype) {
  if (tagtype == "physical_traits") {
    char_profile.physical_traits = tags
    console.log("Updated profile: ", char_profile)

  } else if (tagtype = "person_traits") {
    char_profile.person_traits = tags
    console.log("Updated profile: ", char_profile)
  } else {
    console.log("Tag does not exist.")
  }
}

function no_enter (event) {
  if (event.code == 'Enter') {
        event.preventDefault();
  }
}



</script>

<template>
  <div>
    <form>
      <p>Character First Name: <input type="text" v-model="char_profile.first_name" v-on:keydown="no_enter"></p>
      <p>Character Last Name: <input type="text" v-model="char_profile.last_name" v-on:keydown="no_enter"></p>
      <SelectInput />
      <div style="clear: left;"></div>
      <br />
      <TagInput tagtype="physical_traits" @tags-update="update_tags"/>
      <br />
      <TagInput tagtype="person_traits" @tags-update="update_tags"/>
      <br />
      <button type="button" @click="submit_profile">Done</button>
    </form>
  </div>
</template>

<style scoped>


</style>
