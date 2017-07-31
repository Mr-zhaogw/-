<template>
  <div class="home">
    <div class="banner">
      
    </div>
    <div class="mcounter">
      sdf
    </div>
  </div>
</template>

<script>
// import NavView from './common/nav-view'
// import Bottom from './common/bottom'
export default {
  name: 'home',
  component:{
    // Nav,
    // Bottom
  },
  data () {
    return {
      
    }
  },
  methods:{
    

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner:before{
    content: '';
    width: 100%;
    height: 100vh;
    background: url(../../static/imgs/banner.jpg);
    background-position: 46% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.banner{
    position: relative;
    width: 100%;
    height: calc(100vh - 70px);
}
.mcounter{
  position: relative;
  overflow: hidden;
  background:#fff;
}
</style>
