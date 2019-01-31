<template>
	<div class="profile_wrap">
		<app-header :title="headTitle"></app-header>
		<app-footer></app-footer>
		<div class="box">
			<div class="hd">
				<img src="../../assets/imgage/advatar.png" alt="">
				<div class="msg">
					<h3>登入/注册</h3>
					<p class="phone"><i class="iconfont icon-shouji"></i><span>暂无绑定手机号码</span></p>

					<p class="right iconfont icon-xiangyou"></p>
				</div>
			</div>

			<div class="m2 clear">
				<div class="m2_content">
					<ul>
						<li>
							<p class="balance"><span>0.00</span>元 </p>
							<p class="balance_title">我的余额</p>
						</li>
						<li>
							<p class="favour"><span>0</span>个 </p>
							<p class="favour_title">我的优惠</p>							
						</li>
						<li>
							<p class="score"><span>0</span>分 </p>
							<p class="score_title">我的积分</p>								
						</li>
					</ul>
					
				</div>
			</div>
			<div class="m3 clear">
				<p>
					<i class="iconfont icon-danju"></i>
					我的订单
					<i class="iconfont icon-xiangyou"></i>
				</p>
				<p>
					<i class="iconfont icon-shangcheng"></i>
					积分商城
					<i class="iconfont icon-xiangyou"></i>
				</p>
				<p>
					<i class="iconfont icon-huangguan"></i>
					饿了么会员卡
					<i class="iconfont icon-xiangyou"></i>
				</p>
			</div>	

			<div class="m4 clear">
				<p>
					<i class="iconfont icon-kefu"></i>
					服务中心
					<i class="iconfont icon-xiangyou"></i></p>
				<p>
					<i class="iconfont icon-xiazai"></i>
					下载饿了么APP
					<i class="iconfont icon-xiangyou"></i>
				</p>
			</div>						
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
		name:'Profile',
		data(){
			return{
				headTitle:"",
				keyword:"",
				city_id:"",
				restRanList:[]
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


			// http://cangdu.org:8001/v4/restaurants
			/*
			geohash 
			keyword 
			 */
			getTitle(){
				this.headTitle = "我的";

			},


		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){
			this.getTitle();

		},

		watch:{

		},


	};
	
</script>
	
rem
<style>	
	.clear{clear: both;}
	body{background:#F5F5F5;}
	.profile_wrap{width: 100%;position: relative;}
	.box{margin-top: 3rem;}
	.box .hd{height: 6rem;width:100%;background: #3190E8;display:-webkit-flex;display:flex; display:-moz-box;}
	.box .hd img{width: 4rem;height: 4rem;border-radius: 50%;padding: 1rem;}
	.box .hd .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;padding: 1.5rem 0 0.5rem 0;color:white;position: relative;}
	.box .hd p.phone i{font-size: 1rem;}
	.box .hd .right{position: absolute;right: 0.7rem;top:30%;font-size: 1.5rem;}

	.box .m2{width: 100%;height: 6rem;position: relative;background: #fff;}
	.box .m2 .m2_content ul{width: 100%;height: 6rem;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.box .m2 li{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;border-right: 2px solid #E6E6E6;;list-style: none;height: 6rem;text-align: center;}
	.box .m2 li .balance{line-height: 1.8rem;margin-top: 1.5rem;}
	.box .m2 li .balance span{color: #FF9900;font-size: 1.5rem;padding-right: 0.2rem;}
	.box .m2 p.balance_title{font-size: 0.8rem;}

	.box .m2 li .favour{line-height: 1.8rem;margin-top: 1.5rem;}
	.box .m2 li .favour span{color: red;font-size: 1.5rem;padding-right: 0.2rem;}
	.box .m2 p.favour_title{font-size: 0.8rem;}
	
     .box .m2 li .score{line-height: 1.8rem;margin-top: 1.5rem;}
	.box .m2 li .score span{color: green;font-size: 1.5rem;padding-right: 0.2rem;}
	.box .m2 p.score_title{font-size: 0.8rem;}

	.box .m3{margin-top: 0.5rem;background: white;height:9rem;width: 100%;box-sizing: border-box;position: relative; }
	.box .m3 p{height: 3rem;border-bottom: 2px solid #E6E6E6;line-height: 3rem;font-size: 1rem;padding-left: 1rem;position: relative;}
	.box .m3 p i.icon-xiangyou{position: absolute;top: 0.1rem;right: 1rem;font-size: 0.8rem;}

	.box .m4{margin: 0.5rem 0 3rem 0;background: white;height:6rem;width: 100%;box-sizing: border-box;position: relative; }
	.box .m4 p{height: 3rem;border-bottom: 2px solid #E6E6E6;line-height: 3rem;font-size: 1rem;padding-left: 1rem;position: relative;}
	.box .m4 p i.icon-xiangyou{position: absolute;top: 0.1rem;right: 1rem;font-size: 0.8rem;}
</style>