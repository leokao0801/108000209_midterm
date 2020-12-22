import Vue from 'vue'
import Router from 'vue-router'
import Midterm from '@/components/Midterm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Midterm',
      component: Midterm
    }
  ]
})
