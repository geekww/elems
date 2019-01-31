<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle"></app-header>
		<div class="input_wrap" >
			<input type="text" placeholder="输入学校、商务楼、地址" v-model="keyword" @keyup.enter="getAddress">
			<p @click="getAddress()" >提交</p>
		</div>

		<!-- 点击后的搜索历史 -->
		<div class="search_history" v-if="addRessList">
			<div v-for="(address,index,key) of addRessList" class="history_list" :key="key">
			<router-link :to='{name:"MySite",query:{geohash:address.geohash}}'>
				<p>{{address.name}}</p>
				<span>{{address.address}}</span>
			</router-link>
			</div>
		</div>

		<div class="search_history" v-if="!addRessList.length">
			<p class="f">搜索历史</p>
			<div v-for="(address,key,index) of SHistory" class="history_list" :key="key" >
			<router-link :to='{name:"MySite",query:{geohash:address.geohash}}'>
				<p>{{address.name}}</p>
				<span>{{address.address}}</span>
			</router-link>
			</div>

			<p v-if="this.addRessList.length" class="clear_all" @click="clearAllAddress()">清空所有</p>		
		</div>
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	import { Toast} from 'vux'
	
	export default{
		name:'SelectCity',
		data(){
			return{
				headTitle:"",
				keyword:"",
				city_id:"",
				addRessList:[]
			};
		},
		components:{
			Toast,
			"app-header":AppHeader,
		},
		computed:{
			SHistory(){
				if (localStorage.SearchHistory) {
					return JSON.parse(localStorage.SearchHistory);	//[{},{}...]
				}else{
					return [];
				}
			}
		},
		methods:{
			// http://cangdu.org:8001/v1/cities/:id
			// 
			getCityInfo(){
				var _this = this;
				var id = this.$route.params.id;
				var url ='http://cangdu.org:8001/v1/cities/'+id;
				axios.get(url)
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
					_this.headTitle = response.data.name;
					_this.city_id = response.data.id;
				  })
				  .catch(function (error) {
				    console.log(error);
				 });
			},

			getAddress(){
				var _this = this;
				var city_id  = this.city_id;
				var keyword = this.keyword;
				var url ='http://cangdu.org:8001/v1/pois/';
				axios.get(url,{
						params:{
						city_id:city_id,
						keyword:keyword,
						type:'search'
					}
				})
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
				    if (response.data.message=="参数错误") {
					   _this.$vux.toast.show({
						   	text:'请填写关键字！',
						   	position:'top',
						   	type:'text',
						   	time:3000
						});
				    }else{

					    _this.addRessList =response.data; 
				    }

				  })
				  .catch(function (error) {
				    console.log("getAddress异常");
				    console.log(error);
				 });				

			},
			clearAllAddress(){
				this.addRessList = [];
			}	
		

		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){
			this.getCityInfo();

		},

		watch:{

		},


	};
	
</script>


<style>
.selectCity_wrap{margin-top: 3rem;}
	.input_wrap{width: 100;height: 6rem;background: white;margin-top: 1rem;padding: 1rem;}
	.input_wrap input{width: 100%;height: 2rem;margin: 0 auto;}
	.input_wrap p{width:100%;margin-top: 1rem;height: 2rem;background: #3190E8;color: white;border-radius: 5px;text-align: center;font-size: 1.2rem;}


	.search_history p.f{border-bottom: 1px solid #EAEAEA;margin-left: 1rem;}

	.history_list{width: 100%;height: 5rem;background: white;padding: 1rem;box-sizing: border-box;border-bottom: 2px solid #EAEAEA;}
	.history_list p{font-size: 1.2xxx路xxx街xxx路xxx街rem;}
	.history_list span{font-size: 1rem;color: #999999;}

	.clear_all{width: 100%;height: 2.5rem;background:white;text-align: center;line-height: 2.5rem;font-size: 1.3rem;color: #666666;}
</style>