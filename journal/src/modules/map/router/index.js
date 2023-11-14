export default {

    name: 'map',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/map/views/MapView.vue'),
}