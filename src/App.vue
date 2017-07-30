<template>
  <div id="app">
    <nav-view></nav-view>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import NavView from './components/common/nav-view'
import Bottom from './components/common/bottom'
export default {
  name: 'app',
  components:{
    NavView,
    Bottom
  }
}
</script>

<style>

</style>
