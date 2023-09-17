<template>
  <div class="entry-list-container">
      <div class="px-2 pt-2 mt-2">
          <input 
            type="text"
            class="form-control"
            placeholder="Buscar entrada"
            v-model="terminoBusqueda"
          />
      </div>

      <div class="entry-scrollarea mt-4">
          <Entry
            v-for="entry in entradasPorTemino"
            :key="entry"
            :entry="entry"
          />
      </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  data(){
    return{
       terminoBusqueda: ''
    }
  },

  computed: {
    
    ...mapGetters(
      'journal/',[ 'getEntriesByTerm']
    ),
    entradasPorTemino(){
      return this.getEntriesByTerm(this.terminoBusqueda)
    }
  }
}
</script>



<style lang="css" scoped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc( 100vh - 56px );
}

.entry-scrollarea{
    height: calc( 100vh - 110px );
    overflow: scroll;
}
</style>
