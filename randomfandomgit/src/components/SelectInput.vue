<script setup>
import { ref, reactive, onBeforeMount, onMounted, nextTick } from 'vue'
import { useStore } from '../stores/store'

const store = useStore()

const showDropdown = ref(false)
const fandom_select_dropdown = ref()
const fandom_select_default_button = ref()
const fandom_select_textbox = ref()
const errorMessage = ref(false)
const input_text = ref()
const fandom_display_text = ref("Select a Fandom")

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

function handleClickOutside (event) {
    if (showDropdown.value == true && !fandom_select_dropdown.value.contains(event.target)) {  // checks if clicked element is outside of dropdown, and if the dropdown is even open
        console.log("closing")
        close_dropdown()
    }
}

function show_dropdown () {
    console.log("show dropdown")
    showDropdown.value = true
    nextTick(() => {
    fandom_select_textbox.value.focus();
    });
    console.log(showDropdown.value)
}

function close_dropdown () {
    showDropdown.value = false

}

function add_fandom (event) {
    if (event.code == 'Enter') {
        event.preventDefault();
        if (input_text.value.trim() != "") {
            store.fandoms.push(input_text.value)
            input_text.value = ""
            console.log(store.fandoms)
            errorMessage.value == false
        } else {
            console.log("error")
        }
        
    }
}

function deleteFandom (index) {
    const deleted = store.fandoms[index];
    if (fandom_display_text.value == deleted) {
        fandom_display_text.value = "Select a Fandom";
    }

    store.fandoms.splice(index, 1);

    
}


function fandom_select (index) {
    fandom_display_text.value = store.fandoms[index]
    close_dropdown()
}

</script>

<template>
    <div>
        <label style="float: left; margin-right: 1em">Character Fandom: </label>
        <div class="container"> 
            <div ref="fandom_select_default_div" v-on:click="show_dropdown" @click.stop class="default_div">{{ fandom_display_text }}</div>
            <div ref="fandom_select_dropdown" v-show="showDropdown" @click.stop class="dropdown">
                <input type="text" ref="fandom_select_textbox" placeholder="Enter a new fandom" v-model="input_text" class="input" v-on:keydown="add_fandom" />
                <div v-for="(fandom, index) in store.fandoms" :key="index" class="fandom_options">
                    <div class="fandom_option" v-on:click="fandom_select(index)">{{ fandom }} <span v-on:click.stop="deleteFandom(index)" >x</span></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.container {
    position: relative;
    float: left; // puts the container next to other elements under same parent element
    background-color: rgb(98, 89, 206); 
    width: 130px
}

.default_button {
    width: 100%;
}

.input {
    width: 100%;
}

.dropdown {
    position: absolute;
    top: 0; // makes sure it lines up with the top of the container, which overlays the button
    z-index: 0; // overlays it above other elements
    background-color: aliceblue;
    width: 100%;
}

.fandom_options {
    width: 100%;
    background: #1d0a87;
}

.fandom_option {
    width: 100%;
    background: #7a6ccb;
    padding: 5px;

}

.fandom_option > span {
    cursor: pointer;
    opacity: 0.75;
    position: absolute;
    right: 0;
    opacity: 0%;
    
}

.fandom_option:hover span {
    opacity: 100%;
}

</style>