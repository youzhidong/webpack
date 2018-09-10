import Vue from 'vue'
import VueRouter from 'vue-router';
import home from './../pages/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        { path: '/', name: 'Home', component: home },
      ]
  })

  export default router;