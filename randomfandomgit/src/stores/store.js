import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useStore = defineStore('store', () => {
    const characters = ref([])
    


    return { characters };
});