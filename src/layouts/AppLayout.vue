<template>
    <div class="app-layout">
        <div class="content">
            <div id="nav">
              <router-link to="/home">Home</router-link> |
              <router-link to="/about">About</router-link>
            </div>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
        <div class="background">
            <div class="cover"
                :style="{backgroundImage: `url(${errorCover})`}">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: ['403', '404', '500', '503']
            }
        },
        methods: {
            // pick random laravel background error svg
            reandomError() {
                return this.errors[Math.floor(Math.random() * this.errors.length)]
            }
        },
        computed: {
            errorCover() {
                return require(`@/assets/svg/${this.reandomError()}.svg`)
            }
        }
    }
</script>