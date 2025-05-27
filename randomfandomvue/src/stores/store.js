import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useCounterStore = defineStore('store', () => {
    const characters = ref([])
    const character_profile = reactive({
        first_name: String,
        last_name: String,
        physical_traits: Array,
        person_traits: Array,
        fandom: String,
        arro_level: Number
    });


    return { characters, character_profile };
});