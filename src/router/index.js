import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'

Vue.use(Router)

const base =  process.env.BASE_URL
//const base =  'vue-dynamic-routes' // Use before build

export default new Router({ routes, base, mode: 'history' })
