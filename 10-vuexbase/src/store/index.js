
import { createStore } from "vuex";
import getRandonInt from '../helpers/getRandonInt'


export default createStore({
    state: {
        count: 5,
        lastmutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment(state){
            state.count++
            state.lastmutation = 'increment'
            
        },
        incrementpor5(state, val){
            state.count += val
            state.lastmutation = 'incrementbyRandom' + val
            state.lastRandomInt = val
        },
        setLoading(state, val){  //mutacion que va a camibar setLoading
           state.isLoading = val
        }
    },
    actions: {
        async incrementRandomInt( context ){  //tiene la informacion sobre el store o el modulo sobre el cual yo estoy trabajando
           //puedo desestructurar el {contex} para que quede  ({commit})
           context.commit('setLoading', true)

            const randomInt = await getRandonInt()
            context.commit('incrementpor5', randomInt)
            context.commit('setLoading', false)
        }
    },
    // similar a las propiedades computadas, reciben el argumento del state
    getters: {
        raizCuadradaCount(state){
            return state.count * state.count
        }

    }
})