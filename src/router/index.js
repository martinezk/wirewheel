import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Food from '@/components/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ],
  //prevent hashes in URL
  mode: 'history'
})
