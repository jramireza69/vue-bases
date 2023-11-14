


import searchApi from '@/api/searchApi'
// export const myAction = async ({ commit }) => {

// }
export const getInitialLocation = async ({ commit }) => {
// Todo: colocar loading

navigator.geolocation.getCurrentPosition(
    ({coords}) => commit('setLatLng', {lng: coords.longitude, lat: coords.latitude }),
    
    (err) => {
        console.log(err);
        throw new Error('no geolocation in your pc')
    }
)
}

export const searchPlacesByTerm = async ({ commit, state }, query) => {
          
     if (query.length === 0) {
        commit('setPlaces', [])
        return []
        
    }
    if ( !state.userLocation) {
        throw new Error('hey no tienes tu ubicacion')
    }
    commit('setIsLoadingPlaces')

    const resp =  await searchApi(`
    /${query}.json`, {
        params:{
            proximity: state.userLocation.join(',')
        } 
    })
     
    commit('setPlaces', resp.data.features)
}





