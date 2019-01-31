<template>
	<div class="mySite_wrap">
		<!-- <router-view></router-view> -->
		<app-header :title="headTitle" :isShowBack="false"></app-header>
		<app-footer></app-footer>

		<div class="m1">
			<ul>
				<li>
					<img src="../../assets/imgage/m1/m1_1.jpeg" alt="">
					<p>甜品饮品</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_2.jpeg" alt="">
					<p>超市便利</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_3.jpeg" alt="">
					<p>美食</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_4.jpeg" alt="">
					<p>简餐</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_5.jpeg" alt="">
					<p>新店特惠</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_6.jpeg" alt="">
					<p>准时达</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_7.jpeg" alt="">
					<p>预定早餐</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_8.jpeg" alt="">
					<p>土豪套餐</p>
				</li>
			</ul>

			<div class="btn">
				<p class="btn_1 active"></p>
				<p class="btn_2"></p>
			</div>
		</div>

		<div class="m2">
			<p><i class="iconfont icon-tiyan"></i> <span>附近商家</span></p>
			<ul>
				<li v-for="(restaurant,key,index) of restaurants" :key="key">
					<router-link :to='{name:"Shop",query:{id:restaurant.id}}'>
					<img v-bind:src="'https://elm.cangdu.org/img/'+restaurant.image_path"  alt="">
					</router-link>
					<div class="m2_content">
						<div class="floor_1">
							<p class="store"><span>品牌</span> {{restaurant.name}} </p>
							<p class="z"><span v-for="(support,key,index) of restaurant.supports" :key="key">{{support.icon_name}}</span></p>
						</div>
						<div class="floor_2 clear">
							<p class="pingjia"><span>☆☆☆☆ {{restaurant.rating}}</span> 月销量 {{restaurant.recent_order_num}}   </p>
							<p class="s"><span class="feng">蜂鸟专送</span> <span class="zhunshida">准时达</span></p>
						</div>
						<div class="floor_3">
							<p class="peisong">20起送，配送费20 </p>
							<p class="p">{{restaurant.distance}} / <span class="time">{{restaurant.order_lead_time}}</span></p>
						</div>												
					</div>

				</li>
			
			</ul>
		</div>
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	import AppFooter from '../../components/AppFooter.vue'
	
	export default{
		name:'MySite',
		data(){
			return{
				headTitle:"",
				latitude:"",
				longitude:"",
				restaurants:[]
			};
		},
		components:{
			"app-header":AppHeader,
			"app-footer":AppFooter
		},
		computed:{

		},
		methods:{
			/**
			 * /
			 * @return {[obj]}
			 *  {
				  address: "上海市黄浦区西藏中路",
				  city: "上海市",
				  geohash: "31.22967,121.4762",
				  latitude: "31.22967",
				  longitude: "121.4762",
				  name: "黄浦区上海人民广场"
				}
			 */
			getDetailAddress(){
				var _this = this;
				var geohash = this.$route.query.geohash;
				_this.$store.commit("setGeohash",geohash);
				var url ='http://cangdu.org:8001/v2/pois/'+geohash;
				axios.get(url)
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
					_this.headTitle = response.data.name;   //根据经纬度获取地位的地点名称
					_this.$store.state.latitude = response.data.latitude;  //存储经度
					_this.$store.state.longitude = response.data.longitude;//存储维度
					_this.$store.commit("SearchHistoryToLacal",response.data); //搜索历史保存在本地
					_this.getShops();
				  })
				  .catch(function (error) {
				    console.log(error);
				 });
			},

			getShops(){
				var _this = this;
				var latitude  = this.$store.state.latitude;
				var longitude = this.$store.state.longitude;
				console.log("经度："+latitude,"纬度："+longitude);
				axios.get("http://cangdu.org:8001/shopping/restaurants",{
					params:{
						latitude:latitude,
						longitude:longitude
					}
				})
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log("获取restaurants成功");		//{[],[]...}
				    _this.restaurants = response.data;
				    // _this.restaurants = response.data;
				  })
				  .catch(function (error) {
				    console.log(error);
				 });
			}

		},
		mounted(){

		},
		beforeCreate(){


		},
		created(){
			this.getDetailAddress();
			


		},

		watch:{

		},


	};
	
</script>


<style scoped>
	.clear{clear: both;}
	.mySite_wrap{background: #F5F5F5;}
	.mySite_wrap li{list-style: none;}
	.m1{height: 11rem;width: 100%;background: white;margin-top: 3rem;}
	.m1 img{width: 3rem;height: 3rem;}
	.m1 ul{height: 9.3rem;}
	.m1 ul li{width: 25%;height: 4rem;text-align: center;float: left;padding-bottom: 0.5rem;}
	.m1 li p{line-height: 0.5rem;line-height:0.4rem; } 
	.m1 .btn{width: 100%;height: 1rem;position: relative;} 
	.m1 .btn p{width: 0.5rem;height: 0.5rem;border-radius: 50%;background: gray;float: left;position: absolute;}
	.m1 .btn p.active{background: #3190E8;}
	.m1 .btn p.btn_1{left: 48%;bottom: 0.4rem;}
	.m1 .btn p.btn_2{left: 52%;bottom: 0.4rem;}

	.m2{margin-top: 1rem;background: white;width: 100%;box-sizing: border-box;padding: 1rem 0.5rem;}
	.m2 p span{font-size: 1rem;line-height: 1.2rem;}
	.m2 .floor_1 p i{font-size: 1.2rem;line-height: 1.2rem;}
	.m2 ul li{width: 100%;height: 8rem;padding:1rem 0.5rem;border-bottom: 1px solid #E6E6E6;box-sizing: border-box;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.m2 ul li:last-child{margin-bottom: 1.5rem;}
	/* float: left; */
	.m2 li img{width: 4rem;height: 4rem;padding: 0.5rem 0;display: inline-block;}
	/*float: left; width: 77%;*/
	.m2 .m2_content{height: 5rem;box-sizing: border-box;padding: 0.3rem;-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;}
	.m2 .store{float: left;}
	.m2 .store span{display: inline-block;width: 3rem;height: 1.2rem;text-align: center;background: #FFD930;border-radius:0.1rem;}
	.m2 .z{float: right;}
	.m2 .z span{border:1px solid #F3F3F3;margin-left: 0.4rem;}
	
	.m2 .floor_2 p{height: 2rem;line-height: 2rem;}
	.m2 .floor_2 p span{font-size:0.7rem;}
	.m2 .floor_2 p.pingjia {font-size: 0.7rem;float: left;}
	.m2 p.pingjia span{font-size: 0.7rem;}
	.m2 .floor_2 .s{float: right;font-size: 0.7rem;}
	.feng{width: 2rem;height: 0.5rem;color: white;text-align: center;background:#3190E8;}
	.zhunshida{color: #3190E8;border: 1px solid #3190E8;}

	
	.m2 .floor_3 p.peisong {font-size: 0.7rem;float: left;}
	.m2 .floor_3 p span,.m2 .floor_3 p{font-size:0.7rem;}

	/*.m2 p.pingjia span{font-size: 0.7rem;}*/
	.m2 .floor_3 p.p{float: right;width: 50%;height: 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align: right;}
	.m2 .floor_3 .time{color: #3190E8;}
</style>