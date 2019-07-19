import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Search from './views/Search/Search.vue'

Vue.use(Router)

/* routing of views based on path */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Search,
    },
    {
      path: '/home',
      name: 'home',
      component: Search,
    },
    {
      path: '/search',
      name: 'home',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})
