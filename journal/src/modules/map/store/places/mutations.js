
// export const myAction = ( state ) => {

// }

export const   setLatLng = (state , {lng, lat}) => {
   // console.log(coords);
   state.userLocation = [ lng, lat]
   state.isLoading = false
},
setIsLoadingPlaces = ( state ) => {
   state.isLoadingPlaces = true
},
setPlaces = ( state, places ) => {

   state.places = places
   state.isLoadingPlaces = false
}

