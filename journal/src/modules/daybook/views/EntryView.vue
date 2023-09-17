<template>
  <div v-if="entry"
   class="entry-title d-flex justify-content-between p-2">
      
        <div>
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ month }}</span>
            <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
  </div>

    <hr>
    <!-- como son dos condiciones los puedo agrupar con una etiqueta template -->
    <div v-if="entry" 
     class="d-flex flex-column px-3 h-75">
        <textarea
        v-model="entry.text"
            placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>

    <Fab 
        icon="fa-save"
    />

    <img 
        src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" 
        alt="entry-picture"
        class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex'
import getDayMonYear from '../../../helpers/getDayMonYear'

export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            entry: null
        }
    },
   
    
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    methods: {
        loadEntry(){
               const entry = this.getEntryById(this.id)
               if (!entry ) return this.$router.push({name: 'no-entry'})

               this.entry = entry
        }
    },
    computed:{
         ...mapGetters(
      'journal',[ 'getEntryById']  //se vuelve un metodo que puedo utilizar desde aca.... porque lo tengo mapeado
    ),
          day(){
            const { day } = getDayMonYear(this.entry.date)
            return day
          },
          month(){
            const { month } = getDayMonYear(this.entry.date)
            return month
          },
          yearDay(){
              const { yearDay } = getDayMonYear(this.entry.date)
              return yearDay

          },
    },
    created(){
       this.loadEntry()
    },
    //me sirve para estar observando el id porque lo mapie y lo tengo por la url    
    watch: {
        id(){
           this.loadEntry()
         }
    }


}
</script>

<style lang="css" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    
}
textarea:focus{
    outline: none;
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 60px;
    box-shadow: 0px 5px 10px #0b0b0b ;
}

</style>