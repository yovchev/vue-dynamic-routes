import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'

Vue.use(Router)

const base = process.env.BASE_URL

export default new Router({ routes, base, mode: 'history' })
