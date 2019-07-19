<template>
  <div id="app">
    <!--Inclusion of Header Component-->
    <my-header></my-header>
    <!--Routing of View-->
    <router-view class="main-page"/>
  </div>
</template>

<script>
/* Adding Header component */
import Header from './components/Header/Header.vue'
export default {
  components: {
    'my-header': Header,
  },
}
</script>

<style lang="stylus">

html,
body,
#app
  min-height 100%
  background #fafafa

#app
  v-box()

.main-page
  flex 100% 1 1 !important

#nav
  padding 12px 24px
  border-bottom solid 1px $vue-ui-color-light-neutral
  h-box()
  .vue-ui-dark-mode &
    border-bottom-color $vue-ui-color-dark

  a
    color $vue-ui-color-dark
    display inline-block
    padding 0 6px
    .vue-ui-dark-mode &
       color $vue-ui-color-light-neutral

    &.router-link-exact-active
      color $vue-ui-color-primary

.demo
  padding 24px

  h2
    &:first-child
      margin-top 0

.ui-test
  > .row,
  > .grid
    margin-bottom 12px

  > .grid
    display grid
    grid-gap 12px
    for n in (2..10)
      &.col-{n}
        grid-template-columns repeat(n, 1fr)
</style>
