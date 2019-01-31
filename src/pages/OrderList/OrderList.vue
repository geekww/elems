<template>
	<div class="order_wrap">
		<app-header :title="headTitle"></app-header>
		<app-footer></app-footer>
		<div class="no_login">
			<img src="../../assets/imgage/order_no.png" alt="">
			<p class="tips">登入后查看订单</p>
			<p class="login">立即登入</p>
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
		name:'OrderList',
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
				this.headTitle = "订单";

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
	

<style>
	.order_wrap{width: 100%;position: relative;}
	.no_login{text-align: center;margin-top: 6rem;}
	.no_login .tips{font-size: 1.2rem;color: #6A6A6A;line-height: 2rem;}
	.no_login .login{font-size: 1rem;width: 6rem;height: 2rem;text-align: center;line-height: 2rem;color: white;background: #56D176;margin: 0 auto;}
</style>