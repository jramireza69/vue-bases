import axios from 'axios'


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        country: 'co',
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoianJhbWlyZXphNjkiLCJhIjoiY2xvZnU4Zm96MHFvdjJscWU1OG1xbm00dCJ9.xQ0fFHvwUK-6NxNAJcduWw'
    }
})

export default searchApi