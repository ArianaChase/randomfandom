<script setup>
import { ref } from 'vue'

const props = defineProps({
    tagtype: String
})

const tags = ref(["strong", "tall"])
const val = ref() // ref variables have to be called by .value in <script>

// adding tags
function addTag (event) {
    if (event.code == "Comma" || event.code == "Enter") {
        console.log('Reached addTag function')
        event.preventDefault()
        console.log(val.value) 
        if (val.value.length > 0) {
            tags.value.push(val.value)
            console.log(tags)
            val.value = ''
        }
    } 
} 

// deleting tags

function deleteTag (index) {
    tags.value.splice(index, 1)
}
</script>

<template>
    <div v-for="(tag,index) in tags" :key="tag" class="tag-input_tag">
        <span v-on:click="deleteTag(index)">x</span>
        {{ tag }}
        
    </div>
    <input type="text" placeholder="Enter a tag" class="tag-input_text" v-model="val" @keydown="addTag"/>
</template>

<style lang="scss" scoped>

.tag-input_tag {
    float: left;
    padding: 1px;
    background: #ffffff;
    color: #000000;
    margin: 2px;
}

.tag-input_tag > span {
    cursor: pointer;
    opacity: 0.75;
}

</style>