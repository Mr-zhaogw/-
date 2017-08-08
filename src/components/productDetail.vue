<template>
  <div class="productDetail">
    <div class="r" style="width:1180px;">
       <div class="banner">
         <el-carousel trigger="click" height="510px" :autoplay="false" arrow="always">
          <el-carousel-item v-for="item,index in imgList" :key="index">
            <img :src="item.imgUrl">
          </el-carousel-item>
        </el-carousel>
       </div>
    </div>
    <div class="paroduct-describe">
      <div class="r" style="width:1180px;">
        <div class="purchase">
          <h2>HAYAKU 板鞋</h2>
          <span>¥52.25</span>
          <p>极有家认证[优质网店]：1年好店，权威认证，买退无忧</p>
          <p>商家承诺：免费提供“运费险”，退货最高获赔25元运费理赔</p>
          <a @click="goModel">立即购买</a>
        </div>
        <div class="paroduct-img">
            <img src="../../static/imgs/p.jpg">
            <img src="../../static/imgs/p.jpg">
        </div>
      </div>
    </div>
    <div class="model" id="model">
      <i @click="coloseModel" id="closeIcom"><img src="../../static/imgs/icon/close_black.png" height="44" width="44"></i>
    </div>
  </div>
</template>
<script>
  export default{
    name:'productDetail',
    data(){
      return{
        imgList:[
          {
            imgUrl:require('../../static/imgs/p2.jpg')
          },
           {
            imgUrl:require('../../static/imgs/p2.jpg')
          },
           {
            imgUrl:require('../../static/imgs/p2.jpg')
          }
        ]
      }
    },
    methods:{
      coloseModel(){
        var modelDom = document.getElementById('model');
        modelDom.style.opacity = 0;
      },
      goModel(){
        var modelDom = document.getElementById('model');
        modelDom.style.opacity = 1;
      }
    }
  }
</script>
<style>
.productDetail .model{
  width:480px;
  height: 400px;
  position: fixed;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0,0,0,.3);
  top:50%;
  left: 50%;
  margin-top:-200px;
  margin-left: -240px;
  z-index: 10;
  transition:.5s ease;
  opacity: 0;
}
.productDetail .model i{
  position: absolute;
  right: 0;
  top:0;
  transition:1s ease;
  cursor: pointer;
  width:40px;
  height: 40px;
  display: inline-block;
}

.productDetail .banner{
  height: 520px;
}
.productDetail .paroduct-describe .purchase{
  padding:50px 0;
}
.productDetail .paroduct-describe .purchase h2{
  font-size: 22px;
  margin-bottom: 5px;
}
.productDetail .paroduct-describe .paroduct-img{
  width:100%;
  background:#fff;
  padding:30px;
  box-sizing: border-box;
  text-align: center;
}
.productDetail .paroduct-describe .paroduct-img img{
  margin-bottom: 15px;
  width: auto;
  height: auto;
  max-width: 1120px;
}
.productDetail .paroduct-describe .purchase a{
    display: inline-block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    background: #ff6700;
    color: #fff;
    text-align: center;
    margin: 20px auto;
    transition: all 0.3s ease-out 0s;
    cursor: pointer;
    text-decoration: none;
}
.productDetail .paroduct-describe .purchase span{
    font-size: 14px;
    color: #ff6700;
    display: inline-block;
    margin-bottom: 10px;
}
.productDetail .paroduct-describe .purchase p{
    font-size: 12px;
    color:#666;
    line-height: 25px;
}

  .productDetail .el-carousel__item{
    text-align: center;
  }
  .productDetail .el-carousel__button{
    width:7px;
    height: 7px;
    border-radius: 4px;
    background: #777
  }
  .productDetail .el-carousel__item{
    opacity: 0
  }
  .productDetail .el-carousel__item.is-active{
    opacity: 1 
  }
  .paroduct-describe{
    background:#f8f8f8;
  }
</style>