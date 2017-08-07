<template>
	<div class="bottom">
		<div class="r bot-text" style="width:1180px;">
			<ul class="fn-clear">
				<li class="bottom-first">
					<h2>联系我们</h2>
					<span>Contact Us</span>
				</li>
				<li class="bottom-second">
					<p>关注</p>
					<span class="icon">
						<i><img src="../../../static/imgs/icon/sina.png"></i>
						<i><img src="../../../static/imgs/icon/wachat.png"></i>
					</span>
				</li>
				<li class="bottom-third">
					<h4>云大创客空间cometree</h4>
					<p>地址：一二一大街云南大学</p>
					<p>电话：010-69384970947</p>
					<p>邮箱：touch@126.com</p>
				</li>
				<li class="bottom-four">
					<p class="yb">邮编：000000</p>
					<p>手机：15096674857</p>
				</li>
			</ul>
		</div>
		<div class="copy">
			<div class="r" style="width:1180px;">
				<P>COPYRIGHT (©) 2017  魔艺极速建站 - UEMO网站模板- 优艺客旗下品牌 - 网站模板 - 智能建站 - 企业建站. </P>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'bottom',
		data(){
			return{

			}
		},
	}
</script>
<style>
	.bottom{
		background:#f8f8f8;
	}
	.bottom .copy{
		background:#fff;
		padding:10px 0;
	}
	.bottom .copy p{
		text-align: center;
		color:#9e9e9e;
	}
	.bottom .bot-text{
		padding: 100px 0;
		overflow: hidden;
	}
	.bottom ul li{
		float:left;
	}
	.bottom ul li.bottom-first{
		width:19%;
	}
	.bottom ul li.bottom-first h2{
		font-size: 24px;
		font-weight: 400
	}
	.bottom ul li.bottom-first span{
		font-size: 14px;
		color:#666;
	}
	.bottom ul li.bottom-second{
		width:20%;
	}
	.bottom ul li.bottom-second p{
		font-size: 16px;
		color:#666;
		margin-bottom: 40px;
	}
	.bottom ul li.bottom-second span.icon i{
		display: inline-block;
		width: 18px;
		height: 18px;
		margin-right: 30px;
	}
	.bottom ul li.bottom-second span.icon i img{
		width:100%;
		height: auto;
	}
	.bottom ul li.bottom-third{
		width:30%;
	}
	.bottom ul li.bottom-third h4{
		font-size: 15px;
		font-weight: 400;
		color:#333;
		margin-bottom: 30px;
	}
	.bottom ul li.bottom-third p{
		color:#666;
		font-size: 12px;
		margin-bottom: 10px;
	}
	.bottom ul li.bottom-four{
		color:#666;
	}
	.bottom ul li.bottom-four p.yb{
		margin: 50px 0 10px 0
		;
	}
</style>