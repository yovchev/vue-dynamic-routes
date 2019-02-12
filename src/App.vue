<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .15s
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
    .app-layout, .default-layout, .errors-layout {
        display: flex;
        min-height: 100vh;
        .content {
            width: 40%;
            padding: 2rem;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            .content {
               flex-grow: 1;
            }
        }
        .background {
            width: 60%;
            position: relative;
            .cover {
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                position: absolute;
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }
    #nav {
      padding: 30px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
</style>
