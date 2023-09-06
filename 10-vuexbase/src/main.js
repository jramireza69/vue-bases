import './assets/main.css'

import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import router from '../src/router'

createApp(App)
            .use(store)
            .use(router)
            .mount('#app')
