<template>
  <div class="home">
    <div class="banner"></div>
    <div class="mcounter">
      <div class="r">
        <ul class="fn-clear">
          <li>
            <span class="count">17,895</span>
            <span class="unit" style="top:10px;">+</span>
            <p>服务网站</p>
          </li>
          <li>
            <span class="count">77</span>
            <span class="unit">款</span>
            <p>建站产品</p>
          </li>
          <li>
            <span class="count">11</span>
            <span class="unit">年</span>
            <p>WEB服务</p>
          </li>
          <li>
            <span class="count">376</span>
            <span class="unit" style="top:10px;">+</span>
            <p>覆盖城市</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bgShow">
      <div class="r">
        <div class="context">
          <img src="../../static/imgs/fixedbg.png">
        </div>
      </div>
    </div>
    <div class="product">
      <div class="r">
        <div class="title block">
          <h2>选择模板开始试用</h2>
          <p>10年建站经验+800家企业客户+顶尖建站团队</p>
        </div>
        <div class="prodect-list fn-clear">
          <div class="box" v-for="item in porduceList">
            <div class="pro-info">
              <img :src="item.imgUrl">
              <div class="btn">
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button :plain="true" type="success">成功按钮</el-button>
              </div>
            </div>
            <div class="text">
              <h3>{{item.title}}</h3>
              <p>{{item.intro}}</p>
              <p>编号 : mo005_3428 <span>2999元/起</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bgParallax">
      <div class="title block" style="padding-bottom:30px;">
        <h2>建站流程</h2>
        <p>Process</p>
      </div>
      <div class="r">
        <div class="context">
          <img src="../../static/imgs/1491303842770.png">
        </div>
      </div>
    </div>
    <div class="us-goods">
        <div class="title block">
          <h2>选择模板开始试用</h2>
          <p>10年建站经验+800家企业客户+顶尖建站团队</p>
        </div>
        <div class="r">
          <div class="context">
             <img src="../../static/imgs/allicon.png">
           </div>
        </div>
    </div>
    <div class="tlir">
      <div class="r fn-clear" style="width:80%">
        <div class="left">
          <h2>实力模板制作专家</h2>
          <span>About us</span>
          <div class="line"></div>
          <p>我们拥有10几年的高端企业网站定制服务，曾服务过：海尔、联想、北京电通、BIAD、雅虎、凤凰中心、民生银行等尽500多家高端企业用户。就是让您在半天时间内拥有一套高端企业网站！去除响应式，独立PC+手机的网站</p>
          <a href="#">more</a>
        </div>
        <div class="right">
          <img src="../../static/imgs/le.png">
        </div>
      </div>
    </div>
    <div class="outTeam">
      <div class="r" style="width:1180px;">
        <div class="title block" style="padding-bottom:30px;">
          <h2>核心团队</h2>
          <p>Core team</p>
        </div>
        <div class="introduceBox">
            <el-carousel indicator-position="outside" trigger="click" :autoplay="false" arrow="never">
              <el-carousel-item v-for="item in 4" :key="item">
                <router-link :to="{name:'detail',query:{id:1}}">
                  <div class="box">
                    <div class="img">
                      <img src="../../static/imgs/p.jpg">
                    </div>
                    <div class="name">
                      <span>赵磊</span>
                      <span>创始人</span>
                    </div>
                    <div class="text">
                      <div class="right">
                        <p><span>奖项</span> —— 第九届中国设计业青年百人榜获奖者并颁发证书  -  Adobe TOP领航者之一  并颁发证书  -  作品收录意大利全国工业设计协会丛书中  -  中国最大设计平台站酷颁发 - 设计10年成就奖</p>
                        <p><span>荣誉</span> —— 欧美Awwwards： 2012年作品曾被Awwwards设计评审机构评为全球最佳CSS网站！（中国仅此一家）由来自8个国家的国际评审团评分，作品获此次评审的最高奖项，并颁发证书。</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </el-carousel-item>
            </el-carousel>
            <p class="icon"></p>
        </div>
      </div>
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
      porduceList:[
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
        {
            imgUrl:require('../../static/imgs/p1.jpg'),
            title:'电子产品类网站',
            intro:'电商 / 设计公司 / 摄影 / 工业 / 3C数码 / 传媒广告等行业',
        },
      ],
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.setCarouselNum();
    })
  },
  methods:{
    setCarouselNum(){
      var cButs = document.querySelectorAll('.outTeam .introduceBox .el-carousel__indicator')
      var pDom = document.querySelector('.outTeam .introduceBox p.icon');
      for(var i=0;i<cButs.length;i++){
        cButs[i].innerHTML = '<div class="inr-tabs">'
                              +'<div class="img"><img src="../../static/imgs/p.jpg"></div>'
                              +'<h3>赵磊</h3>'
                              +'<P>程序架构师，技术总监</p>'
                            +'</div>';
        cButs[i].index = i;            
        cButs[i].onclick =function(){
          if(this.index === 0){
            pDom.style.left = 125 + 'px'
          }
          if(this.index === 1){
            pDom.style.left = 420 + 'px'
          }
          if(this.index === 2){
            pDom.style.left = 715 + 'px'
          }
          if(this.index === 3){
            pDom.style.left = 1010 + 'px'
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.inr-tabs{
  width:100%;
}
.tlir{
  background:#f8f8f8;
}
.outTeam{
  background: #fff;
  padding-bottom: 100px;
}
.outTeam .el-carousel__indicator{
  width:25%;
  padding:0;
}
.outTeam  .introduceBox p.icon{
  position: relative;
  bottom: 180px;
  width: 40px;
  height: 20px;
  left: 125px;
}
.outTeam  .introduceBox p.icon:after{
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid #f6f6f6;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    content: '';
}
.outTeam .introduceBox .box{
  position: relative;
  height: 100%
}
.outTeam  .el-carousel__indicators--outside{
  margin-top:30px;
}
.outTeam .el-carousel__indicators--outside button{
  opacity: 1;
  width: 100%;
}
.outTeam .introduceBox .el-carousel__indicator .inr-tabs{
  text-align: center;
}
.outTeam .introduceBox .el-carousel__indicator .inr-tabs .img{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.outTeam .introduceBox .el-carousel__indicator .inr-tabs h3{
  font-size: 14px;
  color:#444;
}
.outTeam .introduceBox .el-carousel__indicator .inr-tabs p{
  color:#999;
  font-size: 12px;
}
.outTeam .introduceBox .el-carousel__indicator .inr-tabs .img img{
  width: 100%;
  height: 100%;
}
.outTeam .el-carousel__indicators--outside .el-carousel__indicator:hover button{
  opacity: 1;
}
.outTeam .introduceBox .box .text{
  background:#f8f8f8;
  position: absolute;
  bottom: 0;
  padding:60px 0;
  width: 100%;
}
.outTeam .el-carousel__item{
  opacity: 0;
  filter:alpha(opacity=0);
}
.outTeam .el-carousel__item.is-active{
  opacity: 1;
  filter:alpha(opacity=100);
}
.outTeam .introduceBox .box .name{
  position: absolute;
  left: 390px;
  top:100px;
}
.outTeam .introduceBox .box .name span:first-child{
  font-size: 24px;
  color:#333;
}
.outTeam .introduceBox .box .name span:last-child{
  font-size: 12px;
  color:#999;
  margin-left: 10px;
}
.outTeam  .el-carousel__container{
  height: 400px;
}
.outTeam .introduceBox .box .text .right{
  margin-left: 390px;
  padding-right: 40px;
}
.outTeam .introduceBox .box .text .right p{
  color:#777;
  line-height: 25px;
  margin-bottom: 20px;
}
.outTeam .introduceBox .box .text .right p span{
  color:rgb(38,38,38);
  font-weight: bold
}
.outTeam .introduceBox .box .text .right p:last-child{
  margin: 0
}
.outTeam .introduceBox .box .img{
  width:300px;
  height: 300px;
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 68px;
}
.outTeam .el-carousel__indicator.is-active .inr-tabs .img{
  border:3px solid rgba(0,0,0,.4);
  box-sizing: border-box;
}
.outTeam .introduceBox .box .img img{
  width:100%;
  height: 100%
}
.tlir .left{
  width:40%;
  float: left;
  margin-top:10%;
}
.tlir .left h2{
  font-size: 28px;
  color:#333;
}
.tlir .left span{
  font-size: 14px;
}
.tlir .left .line{
  width:30px;
  height: 1px;
  background: #999;
  margin: 30px 0;
}
.tlir .left p{
  font-size: 14px;
  color:#666;
  line-height: 25px;
}
.tlir .left a{
  padding:6px 60px 8px;
  border:1px solid #e1e1e1;
  font-size: 20px;
  color:#666;
  text-decoration: none;
  display: inline-block;
  margin-top:30px;
}
.tlir .right{
  width:60%;
  float: left;
}
.tlir .right img{
  width:100%;
}
.us-goods{
  background:#fff;
  padding:0px 0 80px 0;
}
.us-goods .context{
  text-align: center;
}
.us-goods .context img{
  width:75%;
  height: 100%
}
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
  padding:80px 0;
}
.mcounter ul li{
  float: left;
  width:25%;
  margin-left: -1px;
  border-right: 1px solid rgba(0,0,0,.08);
  text-align: center;
  position: relative;
}
.mcounter ul li:last-child{
  border-right: none;
}
.mcounter ul li span.count{
  font-size: 54px;
  color:#3c3c3c;
  font-weight: 300;
  font-family: HELVETICANEUELTPRO-THEX;
}
.mcounter ul li span.unit{
  position: absolute;
  top:16px;
  color:#959595;
  margin-left: 5px;
}
.mcounter ul li p{
  font-size: 14px;
  color:#939393;
}
.bgShow{
  background:url(../../static/imgs/bj1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}
.bgParallax{
  background:url(../../static/imgs/bj2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.bgParallax .context img{
  width:75%;
  height: auto;
  padding:0px 0 80px 0;
}
.bgShow .context{
    /*background: rgba(0, 0, 0, .2);*/
    transition: all ease-out .5s;
}
.bgShow .context img{
  width:100%;
  height: auto;
  padding:30px 0 80px 0;
}
.product{
  background:#fff;
  padding: 0 0 100px 0;
}
.product .prodect-list .box{
  float: left;
  width:33.333333%;
  text-align: center;
  margin-bottom: 40px;
}
.title.block{
  text-align: center;
  padding:80px 0;
}
.title.block h2{
  color:#333;
  font-size: 26px;
}
.title.block p{
    color: #999;
    font-size: 15px;
    line-height: 30px;
    transition: all .3s ease-out 0s;
}
.product .prodect-list{
  margin-top:50px;
}
.product .prodect-list .box .pro-info{
  width:100%;
  position: relative;
  cursor: pointer;
  height: 37vh;
}
.product .prodect-list .box:hover .pro-info .btn{
  opacity: 1;
}
.product .prodect-list .box:hover .pro-info img{
  width:100%;
}
.product .prodect-list .box .pro-info .btn{
  position: absolute;
  width:60%;
  bottom: 25%;
  left: 18%;
  background:#fff;
  padding:5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
.product .prodect-list .box .pro-info img{
  width:95%;
  transition: all .3s ease-out 0s;
}
.product .prodect-list .box .text h3{
  font-size: 18px;
  color:#505050;
  line-height: 30px;
  /*margin-top:40px;*/
  transition: all .3s ease-out 0s
}
.product .prodect-list .box .text p{
   color: #b1b1b1;
    font-size: 12px;
    line-height: 18px;
    margin: 4px 0 15px 0;
}
.product .prodect-list .box .text p span{
    color: #ff690b;
    font-size: 13px;
    padding:0 10px;
}
.product .prodect-list .box .el-button{
  padding:8px 0;
  width:31%;
  text-align: center;
}
.product .prodect-list .box .el-button+.el-button{
  margin-left: 0px;
}
</style>
