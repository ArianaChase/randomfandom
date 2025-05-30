import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useStore = defineStore('store', () => {
    const characters = ref([])
    const fandoms = ref([])

    return { characters, fandoms };
});