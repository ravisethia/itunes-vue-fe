<template>
  <div class="home">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import demos from '@/demo-routes'
export default {
  name: 'home',

  created () {
    this.demos = demos
  },
}
</script>

<style lang="stylus" scoped>
.home
  display flex
</style>
