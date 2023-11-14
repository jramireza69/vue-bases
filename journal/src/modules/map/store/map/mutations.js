import Mapboxgl from 'mapbox-gl';


// export const myAction = ( state ) => {

// }
export const setMap = ( state, map ) => {
       state.map = map
}

export const setPlaceMarkers = ( state, places ) => {

       // reemplazar antiguos markadores con nuevos 
       
       state.markers.forEach( marker => marker.remove() )
       state.markers = []
       if ( !state.map ) return;
       
// crear los nuevos markadores... debo barrer los places y add al mapa los nuevos markadores

for (const place of places) {
       const [lng, lat] = place.center

       const popup = new Mapboxgl.Popup()
       .setLngLat([ lng, lat ])
       .setHTML(`
       <h4>${ place.text }</h4>
       <p>${ place.place_name }</p>
              `)
       

       const marker = new Mapboxgl.Marker()
              .setLngLat([ lng, lat ])
              .setPopup( popup )
              .addTo( state.map )
       
       state.markers.push( marker )
}



}
