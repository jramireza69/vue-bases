
import { createRouter, createWebHashHistory } from "vue-router";

import Counter2 from "../components/Counter2.vue";
import Counter from "../components/Counter.vue";
import NotFound from "../components/NotFound.vue";




const routes = [
    { path: '/', component: Counter },
    { path: '/counter2', component: Counter2 },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]


  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router