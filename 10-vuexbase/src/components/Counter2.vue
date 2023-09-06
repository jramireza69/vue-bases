<template>
<h1>Contador con base en modulos </h1>
<h2>red stare{{ $store.state.module.count}}</h2>
<h2>propiedad computada: {{ computedProperti }} </h2>
<h2>lectura del mapStated es: {{ count }} </h2>
<h2>lectura del mapStated es mostrando el segundo: {{ siguientemutacion }} </h2>

<h1>aplicacion de las mutations </h1>
<button @click="incrementar">+1</button>
<button @click="incrementarBy5">+5</button>
<button @click="incrementRandomInt" v-bind:disabled="isLoading">random</button>

<span>{{isLoading}}</span>

<h5>acceso directo a los getters  {{$store.getters.raizCuadradaCount}}</h5>
</template>



<script>

import { mapState } from "vuex";
export default {
//otra forma de leerlo
// computed: mapState(['count'])


// forma de leer el state
computed: {
    computedProperti(){
        return  this.$store.state.count
    },
    //otra forma 
    //...mapState(['count'])
    //otra forma
    ...mapState({
        count: state => state.count,
        siguientemutacion: state => state.lastmutation,
        isLoading: state => state.isLoading,
    })
},

//forma de leer el state
// computed: {
    //     computedProperti(){
        //         return  this.$store.state.count
//     }
// }
    methods: {
        incrementar(){
            this.$store.commit('increment')
        },
        incrementarBy5(){
            this.$store.commit('incrementpor5', 5)
        },
        incrementRandomInt(){
            this.$store.dispatch('incrementRandomInt')
        }
    }

}
</script>

<style scoped>
/* button {
    background-color: aqua;
} */
</style>