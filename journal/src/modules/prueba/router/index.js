export default {

    name: 'prueba',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/prueba/views/PruebaView.vue'),
}