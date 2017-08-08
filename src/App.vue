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
  },
  // mounted(){
  //   this.goTop();
  // },
  watch:{
    $route(){
      window.location.reload();
      this.goTop();
    }
  },
  methods:{
    goTop(){
      document.getElementsByTagName('body')[0].scrollTop=0;
    }
  }
}
</script>

<style>

</style>
