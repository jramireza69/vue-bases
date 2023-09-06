import { createStore } from 'vuex'
import counterStore from './contador'

export default createStore({


    modules: {
        counter: counterStore,
    }

})