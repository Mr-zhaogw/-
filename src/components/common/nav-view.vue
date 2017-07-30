<template>
	<div class="nav-view">
		<div class="nav">
			<div class="r fn-clear">
				<div class="logo">
					<img src="../../../static/imgs/1442417914556.png">
				</div>
				<div class="nav-text">
						<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
							  <el-menu-item index="1">首页</el-menu-item>
							  <el-menu-item index="5">免费试用</el-menu-item>
							  <el-menu-item index="6">推荐案例</el-menu-item>
							  <el-menu-item index="7">活动/价格</el-menu-item>
							  <el-submenu index="2">
							    <template slot="title">产品说明</template>
							    <el-menu-item index="2-1">选项1</el-menu-item>
							    <el-menu-item index="2-2">选项2</el-menu-item>
							    <el-menu-item index="2-3">选项3</el-menu-item>
							  </el-submenu>
							  <el-submenu index="3">
							    <template slot="title">合作/代理</template>
							    <el-menu-item index="3-1">选项1</el-menu-item>
							    <el-menu-item index="3-2">选项2</el-menu-item>
							    <el-menu-item index="3-3">选项3</el-menu-item>
							  </el-submenu>
							  <el-menu-item index="4"><a href="javascript:void(0)">帮助
							  </a></el-menu-item>
						</el-menu>
				</div>
				<div class="loginBtn">
					<a href="javascript:" class="btn1">登录</a>
					<a href="javascript:" class="btn2">注册</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'nav-view',
		data(){
			return{
				activeIndex2: '1'
			}
		},
	}
</script>
<style>
 .nav-view .nav{
 		padding:15px 0;
 		background:rgb(248,248,248);
  }
	.nav .logo{
		width:120px;
		height: 38px;
		float: left
	}
	.nav .logo img{
		width:100%;
		height: auto;
	}
	.nav-view .nav .nav-text{
		float: left;
		margin-left: 200px;
	}
	.nav-view .nav .loginBtn{
		float: right;
	}
	.nav-view .nav .loginBtn a{
		font-size: 13px;
		width:60px;
		height: 28px;
		line-height: 28px;
		display: inline-block;
		text-align: center;
		margin-top: 6px;
		color:#fff;
		font-weight: 300;
		margin-left:10px;
	}
	.nav-view .nav .loginBtn a:hover{
		text-decoration: none;
	}
	.nav-view .nav .loginBtn a.btn1{
		background:#46be8a;
	}
	.nav-view .nav .loginBtn a.btn2{
		background:#f96868;
	}
	.nav-view .nav .nav-text .el-menu{
		background:rgb(248,248,248);
	}
	.nav-view .nav .nav-text .el-menu--horizontal .el-menu-item{
		height: 40px;
		line-height: 40px;
	}
	.nav-view .nav .nav-text .el-menu--horizontal .el-submenu .el-submenu__title{
		height: 40px !important;
		line-height: 40px !important;
	}
	.el-menu--horizontal .el-menu-item:hover,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
		background-color: rgb(248,248,248);
		border-bottom: none;
	}
	.el-menu-item{
		padding:0 15px;
	}
	.el-menu--horizontal .el-menu-item a, .el-menu--horizontal .el-menu-item a:hover{
		text-decoration: none;
	}
	.el-menu--horizontal .el-menu-item{
		border-bottom: none;
	}
	.el-menu--horizontal .el-submenu .el-submenu__title{
		border-bottom: none;
	}
	.el-menu--horizontal .el-submenu>.el-menu{
		top:45px;
		border:none;
		border-top:3px solid #777;
		border-radius: 0px;
		min-width:100%;
	}
	.el-submenu .el-menu-item{
		min-width: 130px;
	}
	.el-icon-caret-bottom:before{
		content: "\E600"
	}
</style>