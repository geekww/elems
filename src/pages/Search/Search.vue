<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle"></app-header>
		<app-footer></app-footer>

		<div class="input_wrap" >
			<input type="text" placeholder="输入店铺名称或美食" v-model="keyword" @keyup.enter="searchRestrun()">
			<p @click="searchRestrun()" >提交</p>
		</div>

		<!-- 点击后的搜索历史 -->
		<div class="search_history" v-if="restRanList">
			<div v-for="(Restran,index,key) of restRanList" class="history_list" :key="key">
			<!-- <router-link :to='{name:"MySite",query:{geohash:Restran.geohash}}'> -->
				<p style="float:left;" @click="Select()">{{Restran.name}} </p>
				
			<!-- </router-link> -->
			</div>
		</div>
		
		<!-- localStorage 里保存的搜索历史 -->
		<div class="search_history" v-if="!restRanList.length">
			<p class="f">搜索历史</p>
			<div v-for="(Restran,index,key) of RestranHistory" class="history_list" :key="key" >
			<!-- <router-link :to='{name:"MySite",query:{geohash:Restran.geohash}}'> -->
				<p style="float:left;">{{Restran}} </p>
				<p style="float:right;" @click="deleteOne(index)">X</p>
			<!-- </router-link> -->
			</div>

			<p v-if="!this.restRanList.length" class="clear_all" @click="clearAllRestran()">清空搜索历史</p>		
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
		name:'Search',
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
			// 搜索记录 ，需要实时的都需要存储在vuex里，不能直接去localStorage 获取,界面不能实时更新的。
			// 同时，解决，刷新后的vuex数据清空问题
			RestranHistory(){
				// 从local 拿
				// if (localStorage.RestranHistory.length) {
				// 	return JSON.parse(localStorage.RestranHistory);	//["aa","aa"...]
				// }else{
				// 	return [];
				// }

				// 从vuex拿

				if (this.$store.state.RestranHistory) {
					return this.$store.state.RestranHistory;
				}else{
					return [];
				}



			}
		},
		methods:{


			// http://cangdu.org:8001/v4/restaurants
			/*
			geohash 
			keyword 
			 */
			getTitle(){
				this.headTitle = "搜索";

			},

			searchRestrun(){
				var _this = this;
				var geohash  = this.$store.state.geohash;
				var keyword = this.keyword;
				var url ='http://cangdu.org:8001/v4/restaurants/';
				axios.get(url,{
						params:{
						geohash:geohash,
						keyword:keyword
					}
				})
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
				    if (response.data.status==0) {
					   _this.$vux.toast.show({
						   	text:'请填写关键字！',
						   	position:'top',
						   	type:'text',
						   	time:3000
						});
				    }else{

				    	// 返回成功 但是数据为空
				    	if (!response.data.length) {
						   _this.$vux.toast.show({
							   	text:'未找到相关店铺或美食！',
							   	position:'top',
							   	type:'text',
							   	time:3000
							});
						// 返回成功 并且有数据
				    	}else{

						    _this.restRanList =response.data; 
							_this.$store.commit("SearchRestranHistoryToLacal",keyword); //搜索历史保存在本地(关键字即可)

							// 设置state 的 RestranHistory；
							_this.$store.commit("setRH",localStorage.RestranHistory);
				    	}


				    }

				  })
				  .catch(function (error) {
				    console.log("searchRestrun异常");
				    console.log(error);
				 });				

			},

			clearAllRestran(){
				this.$vux.toast.show({
				   	text:'清空成功！',
				   	position:'top',
				   	type:'text',
				   	time:3000
				});
				// 清空后 两个地方都清空
				
				this.$store.commit("ClearRH");

			},

			// 删除单条
			deleteOne(index){
				this.$store.commit("deleteOne",index);
			},

			// 点击  搜索出来的选项  
			Select(){

			}
		

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
.selectCity_wrap{margin-top: 3rem;}
	.input_wrap{width: 100;height: 6rem;background: white;margin-top: 1rem;padding: 1rem;}
	.input_wrap input{width: 100%;height: 2rem;margin: 0 auto;}
	.input_wrap p{width:100%;margin-top: 1rem;height: 2rem;background: #3190E8;color: white;border-radius: 5px;text-align: center;font-size: 1.2rem;}


	.search_history p.f{border-bottom: 1px solid #EAEAEA;margin-left: 1rem;}

	.history_list{width: 100%;height: 3rem;background: white;padding: 0.5rem;box-sizing: border-box;border-bottom: 2px solid #EAEAEA;}
	.history_list p{font-size: 1.2rem;}
	.history_list span{font-size: 1rem;color: #999999;}

	.clear_all{width: 100%;height: 2.5rem;background:white;text-align: center;line-height: 2.5rem;font-size: 1.3rem;color: #666666;}
</style>