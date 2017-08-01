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
  methods:{
    

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tlir{
  background:#f8f8f8;
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
