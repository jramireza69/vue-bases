<template>
  <div v-if="!isUserLocationReady"
   class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center ">
      
      <h3>Espere por favor!! </h3>
      
      <span>Localizando... </span>
    </div>
    </div> 
    <div v-show="isUserLocationReady" 
     class="map-container"
     ref="mapElement"
     >
     </div>     
      <button @click="onMyLocationClicked"
       class="btnubication btn btn-primary">
        <i class="fa-duotone fa-location-crosshairs"></i>
        </button>
          <SearchBarVue/>
</template>

<script>
import { onMounted, watch, ref } from 'vue';
import {  useMapStore } from "../composables/useMapStore";
import { usePlacesStore } from "../composables/usePlacesStore";
import SearchBarVue from '../search/SearchBar.vue';

import  Mapboxgl  from "mapbox-gl";
export default {
  components: {SearchBarVue},
  

   setup(){
      const map = ref()
    const mapElement = ref()
     const {userLocation, isUserLocationReady} =  usePlacesStore()
     const { setMap } = useMapStore()


    const initMap = async() => {
        if(!mapElement.value) throw new Error('no existe el div element')
      
       await Promise.resolve()
       map.value = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value, //[-75.5624425, 6.229464],   // starting position [lng, lat]
        zoom: 15, // starting zoom
        })

        const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .addTo(map.value)

        setMap(map.value)
    }
    

     onMounted(()=> {
       if(isUserLocationReady.value)            
       return initMap()
     })

     watch(isUserLocationReady, (val1)=> {
         if(isUserLocationReady.value )
         initMap()
     })

   return{
   userLocation, isUserLocationReady, mapElement, map, setMap,

   onMyLocationClicked: () => {
      map.value.flyTo({
        center: userLocation.value,
        zoom: 14
      })
   }

   }
   }  


}
</script>

<style  scoped>
  .loading-map{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;  /* 100% del view height */
    left: 0;
    position: fixed;
    top: 0px;
    width: 100vw; /* 100% de la pantalla */
    z-index: 9999;
  }
  .map-container{
    position: fixed;
    width: 150vw;
    height: 150vh;
    /* background-color: red; */
  }
  .btnubication{
    position: fixed;
    top: 30px;
    right: 30px;
  }
</style>