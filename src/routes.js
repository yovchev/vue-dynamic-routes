// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const NotFound = () => import(/* webpackChunkName: "errors" */ './views/NotFound.vue')
const AppLayout = () => import(/* webpackChunkName: "layouts" */ './layouts/AppLayout.vue')
const DefaultLayout = () => import(/* webpackChunkName: "layouts" */ './layouts/DefaultLayout.vue')

export let DynamicRoutes = {
    path: '/',
    redirect: 'home',
    component: AppLayout,
    meta: { requireAuth: true },
    children: [
        {
            name: 'home',
            path: 'home',
            component: Home
        }
    ]
}

export const StaticRoutes = {
    path: '/',
    name: 'auth',
    component: DefaultLayout,
    meta: { requireGuest: true },
    children: [
        {
            name: 'login',
            path: 'login',
            component: Home
        },
        {
            name: 'register',
            path: 'register',
            component: Home
        }
    ]
}

export const CatchAllRoute = {
        path: '*',
        component: NotFound
}

export default [ DynamicRoutes, StaticRoutes, CatchAllRoute ]