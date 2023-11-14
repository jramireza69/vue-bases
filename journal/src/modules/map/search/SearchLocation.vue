<template>

<div v-if="isLoadingPlaces" 
class="alert alert-primary text-center">
    <h5>Cargando....</h5>
    <span>Espere por favor....</span>
</div>
    
     <ul v-else
     class="list-group mt-3">
      <li v-for="place in places"
      class="list-group-item list-group-item-action"
      :class="{'active': place.id === activePlace}"
      :key="place.id"
      @click="onPlaceClicked(place)"
      >
        <h5>{{place.text}}</h5>
        <p>{{place.place_name}}</p>
        <div align="right">
            <button 
            class="btn btn-outline-primary btn-sm"
            :class="(place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary' )"
            
            >
                <i class="fa-duotone fa-location-crosshairs"></i>
            </button>
        </div>
        </li>
      
     </ul>
  
</template>

<script>
import { ref, watch } from 'vue'
import { usePlacesStore } from '../composables/usePlacesStore'
import { useMapStore } from '../composables/useMapStore'
export default {
 
 setup(){

    const {isLoadingPlaces, places} = usePlacesStore()
    const { map, setPlaceMarkers } = useMapStore()
    const activePlace = ref('')
      
      watch( places , ((newPlaces) => {
           activePlace.value = ''
          setPlaceMarkers(newPlaces)
      }) )

    return {
        isLoadingPlaces, places, activePlace, map,

        onPlaceClicked: (place ) => {
            activePlace.value = place.id
            const [lng, lat ]= place.center

            map.value.flyTo({
                center: [ lng, lat],
                zoom: 14
            })
        }
    }
 }  
}
</script>


<style scoped>
li{
    cursor: pointer;
}
h5{
    font-size: 15px !important;
}
p{
    font-size: 10px;
}
</style>