<script setup>
import { ref, reactive } from 'vue'
import { useStore } from '../stores/store'
</script>

<template>
    <div> 
        <label>Character Fandom: </label>
        <select name="fandom" class="fandom_select">
          <option></option>
        </select>
    </div>
</template>


<style lang="scss" scoped>

</style>