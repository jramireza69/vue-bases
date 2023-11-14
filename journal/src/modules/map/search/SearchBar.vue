<template>
  <div class="search-bar-container">
    <input

    class="form-control"
     type="text"
     placeholder="Buscar lugares"
     v-model="searchTerm"
     >
     <SearchLocation/>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import SearchLocation from './SearchLocation.vue'
import { usePlacesStore } from '../composables/usePlacesStore'
export default {
  components: { SearchLocation },

   setup(){
     
     const debounceTimeout = ref()
     const debounceValue = ref('')
       const { searchPlacesByTerm } = usePlacesStore()
     return {
      debounceValue, searchPlacesByTerm,

      searchTerm: computed({
        get(){
          return debounceValue.value
        },//obtener valor
        set(val){
          if(debounceTimeout.value) clearTimeout(debounceTimeout.value)
         
         debounceTimeout.value = setTimeout(() => {
          debounceValue.value = val
          searchPlacesByTerm(val)
         }, 500);
        } //establecer valor
      })
     }

   }  

}
</script>

<style scoped>

.search-bar-container{
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    /* z-index: 999; */
    /* overflow: hidden; */
    border-radius: 5px !important;
    padding: 5px;
}
</style>