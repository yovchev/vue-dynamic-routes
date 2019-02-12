<template>
    <div class="errors-layout">
        <div class="content">
            <h1>404</h1>
            <p>
                <b>{{ $route.path }}</b> is missing
                <a href="#" @click.prevent="loadMissingRoutes()">click here</a>
                to load missing routes
            </p>
        </div>
    </div>
</template>

<script>
    import { DynamicRoutes } from '@/routes'

    export default {
        methods: {
            loadMissingRoutes() {
                // Load missing route
                DynamicRoutes.children.push({
                    name: 'about',
                    path: 'about',
                    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
                })
                // Update the routes
                this.$router.addRoutes([DynamicRoutes])
            }
        }
    }
</script>

<style lang="scss">
    .errors-layout .content {
        width: 100% !important;
    }
</style>