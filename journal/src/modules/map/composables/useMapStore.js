import { useStore } from 'vuex'
import {computed,  onMounted, ref } from 'vue'

export const useMapStore = () => {
       
    const store = useStore()

    return {
        map: computed( ()=> store.state.map.map ),
        distance: computed( ()=> store.state.map.distance ),
        duration: computed( ()=> store.state.map.duration ),


        // mutations

         setMap: (map) => store.commit('map/setMap', map), 
         setPlaceMarkers: (places) => store.commit('map/setPlaceMarkers', places) 

        // actions 
    }

}