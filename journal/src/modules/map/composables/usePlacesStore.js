
import {computed,  onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export const usePlacesStore = () => {

    
    const store = useStore()

    onMounted(()=> {          
      
      if ( !store.getters['places/isUserLocationReady']) {
        store.dispatch('places/getInitialLocation')
          }
    })

return {
// State
  IsLoading: computed(() => store.state.places.isLoading),
  userLocation: computed(() => store.state.places.userLocation),
  places: computed(() => store.state.places.places),
  isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
  
  // getters
  isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),

  // actions
  searchPlacesByTerm: ( query ) => store.dispatch('places/searchPlacesByTerm', query)
}
}

