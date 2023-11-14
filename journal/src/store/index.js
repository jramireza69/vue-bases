import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'   //permite el emma scrip6
import auth from '../modules/auth/store'
import map from '../modules/map/store/map'
import places from '../modules/map/store/places'

const store = createStore({
    modules: {
        journal,
        auth,
        map,
        places
    }
})




export default store