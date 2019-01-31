<template>
	<div class="shop_wrap">
		<div class="shop_hd">
			<div class="shop_hd_1">
				<img class="avatar_bg" src="../../assets/imgage/m2/m2_1.jpeg"   alt="">
				<img class="avatar" src="../../assets/imgage/m2/m2_1.jpeg"  alt="">
				<div class="msg">
					<h2 class="hd_title">店铺名称</h2>
					<p class="descript_text">商家配送／分钟送达／配送费¥5</p>
					<p class="p_info">公告 </p>

					<i class="iconfont icon-xiangyou"></i>
				</div>
			</div>

			<p class="f_cut">
				<span class="span_1">减</span>
				<span class="span_2">满30减5，满60减8（APP专享）</span>
				<span class="span_3">一个活动</span>
				<i class="iconfont icon-xiangyou"></i>
			</p>

			<i class="back iconfont icon-xiangzuo"></i>
		</div>

		<div class="tabs">
			<ul>
				<li class="active">商品</li>
				<li>评价</li>
			</ul>
		</div>

		<div class="m3_wrap">
			
			<div class="m3">
				<div class="m3_left">
					<ul>
						<li class="active hot">
							<i class="back iconfont icon-29_rexiao"></i>
							热销版
						</li>
						<li>热销版</li>
						<li>热销版</li>
					</ul>
				</div>
				<div class="m3_right">
					<ul>
						<li class="item">
							<h2>热销榜 <span class="tips">大家喜欢吃，才叫真好吃。</span></h2>
							<div class="item_list">
								<img class="avatar" src="../../assets/imgage/m2/m2_1.jpeg"  alt="">
								<div class="msg">
									<h3>草莓1</h3>
									<p class="intro">草莓1好吃</p>
									<p><span>月销量5555份</span> <span class="haopin">好评率95%</span></p>
									<p class="count"> <span>6.2折</span> </p>
									<div class="price">
										<p class="price_1">250起</p>
										<p class="jiajian">
											<i class="iconfont icon-jianhao"></i>
											<span>11</span>
											<i class="iconfont icon-jiahao1"></i>
										 </p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="footer">
			aaaa
		</div>
		
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	import AppFooter from '../../components/AppFooter.vue'
	import { Toast} from 'vux'
	
	export default{
		name:'Shop',
		data(){
			return{
				headTitle:"",
			};
		},
		components:{
			Toast,
			"app-header":AppHeader,
			"app-footer":AppFooter
		},
		computed:{
	

		},
		methods:{


		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){

		},

		watch:{

		},


	};
	
</script>
	

<style>

	html,body{width: 100%;height: 100%;}
	#app{height: 100%;}
	li{list-style: none;}
	body{background: #F5F5F5;height: 100%;}
	.shop_wrap{width: 100%;height: 100%;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;flex-direction:column;}
	/*height: 8rem;*/
	.shop_hd{width: 100%;border-bottom: 1px solid red;position: relative;overflow: hidden;}
	.shop_hd .back{position: absolute;font-size: 1.5rem;top: 0.2rem;left: 0;color: white;z-index: 50;}
	.shop_hd_1{height: 6rem;padding:0.5rem;box-sizing: border-box;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.shop_hd_1 img.avatar_bg{position: absolute;top: 0;left: 0;width: 100%;-webkit-filter: blur(10px);filter: blur(10px);}
	.shop_hd_1 img.avatar{width: 5rem;height: 5rem;border-radius: 0.5rem;z-index: 10;}
	.shop_hd_1 .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;box-sizing: border-box;height: 5rem;position: relative;margin-left: 0.5rem;color: white;}
	.shop_hd .msg h2{font-size: 1.3rem;line-height: 2rem;}
	.shop_hd .msg .p_info{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width: 100%;}
	.shop_hd_1 .msg i{position: absolute;top: 40%;right: 0;font-size: 1.2rem;}
	.shop_hd .f_cut{width: 100%;box-sizing: border-box;padding: 0 0.5rem;position: relative;color: white;}
	.shop_hd .f_cut .span_1{background:red;color: white;text-align: center;border-radius: 0.1rem;font-size: 0.8rem;}
	.shop_hd .f_cut .span_2{padding-left: 0.2rem;font-size: 0.8rem;}
	.shop_hd .f_cut .span_3{position: absolute;top: 0.2rem;right:2rem;font-size: 0.8rem;}
	.f_cut i{position: absolute;right: 0.5rem;top: 0.2rem;}

	/*tabs*/
	/*border-bottom: 1px solid gray;*/
	.shop_wrap .tabs{height: 3rem;width: 100%;background: white;margin-bottom: 0.2rem;}
	.tabs ul{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.tabs ul li{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;list-style: none;height: 2.8rem;line-height: 3rem;text-align: center;}
	.tabs ul li.active{border-bottom: 2px solid #3190E8;color: #3190E8;}
	/*content*/
	/*.shop_wrap .m3{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}*/
	.shop_wrap .m3_wrap{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;overflow: hidden;}
	.shop_wrap .m3{width: 100%;height: 100%;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.shop_wrap .m3 .m3_left{width: 5rem;height: 100%;}
	.shop_wrap .m3 .m3_right{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;background: white;overflow-y: auto;}

	.m3_left li{width: 5rem;height:4rem;text-align: left;line-height: 4rem;border-bottom: 1px solid #E6E6E6; overflow: hidden;list-style: none;}
	.m3_left li.active{background: white;border-left: 2px solid #3190E8;}
	.m3_left li.hot i{font-size: 1.2rem;color: red;}

	/*右边商品*/
	.m3_right li.item h2{width: 100%;height: 3rem;background: #F5F5F5;font-size: 1.2rem;padding-left: 0.7rem;line-height: 3rem;box-sizing: border-box;}
	.m3_right li.item h2 span.tips{font-size: 0.8rem;padding-left: 0.3rem;color: gray;}
	.item .item_list{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;padding: 0.8rem;border-bottom: 2px solid #F5F5F5;}
	.item .item_list img{width: 4rem;height: 4rem;border-radius: 0.5rem;}
	.item .item_list .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;margin-left: 0.8rem;}
	.item  .msg h3{width: 100%;height: 1.3rem;line-height: 1.36rem;overflow: hidden;}
	.item  .msg .intro{font-size: 0.8rem;height: 1.5rem;line-height: 1.5rem;overflow: hidden;color: gray;}
	.item  .msg .intro .haopin{padding-left: 0.3rem;}
	.item  .msg .count span{color: red;border: 1px solid red;border-radius: 0.3rem;font-size: 0.8rem;}
	.item  .msg div.price{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.item  .msg div.price p.price_1{width: 8rem;overflow: hidden;height: 1.3rem;}
	.item  .msg div.price .jiajian i.icon-jianhao,.item  .msg div.price .jiajian span{visibility:hidden}

	/*footer*/
	/*position: absolute;bottom: 0;left: 0;z-index: 100;*/
	.footer{height: 3rem;width: 100%;background: black;}
</style>