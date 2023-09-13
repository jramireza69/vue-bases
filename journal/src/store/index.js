import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'   //permite el emma scrip6


const store = createStore({
    modules: {
        journal
    }
})




export default store