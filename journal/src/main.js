import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianJhbWlyZXphNjkiLCJhIjoiY2xvZnU4Zm96MHFvdjJscWU1OG1xbm00dCJ9.xQ0fFHvwUK-6NxNAJcduWw'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
