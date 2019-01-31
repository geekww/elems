<template>
  	<div class="home_wrap">
		<x-header :left-options="{backText:'elem.me',showBack:false}" class="home_header">
	      <a slot="left">elem.me</a>
	      <a slot="right">登入 | 注册</a>
	    </x-header>

	    <!-- 当前定位城市 start-->
	    <div class="cur_location_city_wrap">
	    	<group>
	    		<cell title="当前定位城市：" value="定位不准时，请在列表中选择"></cell>
	    		<cell title="" is-link class="is_link"></cell>
		    </group>
	    </div>
	    <!-- 当前定位城市 end-->

	    <!-- 热门城市 start-->
	    <div class="hot_city_wrap">
	    	<group>
	    		<cell title="热门城市" value=""></cell>
		    </group>
		    <div class="hot_list_wrap">
		    	<ul class="ul_list">
		    		<li v-for="(hotCity,index) of hotCityList" :keys="index">
		    		<router-link :to='{name:"SelectCity",params:{id:hotCity.id}}'>
		    			{{hotCity.name}}
			    	</router-link>
		    		</li>
		    	</ul>
		    </div>	 
	    </div>
	    <!-- 热门城市 end-->
	    <!-- 所有 start-->
	    <div class="all_city_wrap">
			<div v-for="(citys,key,index) of sortallCityList" :key="key" class="wrap">
				<div class="all_city_hd">
	    			<p>{{key}} <span v-if="index == 0">(按照字母排序)</span>  </p>
		    	</div>
			    <div class="all_list_wrap clear">
			    	<ul class="ul_list">
			    		<li v-for="(city,key,index) of citys" :key="key" class="ellipsis">
			    			<router-link :to='{name:"SelectCity",params:{id:city.id}}'>
				    			{{city.name}}
				    		</router-link>
			    		</li>
			    	</ul>
			    </div>	 
			</div>			
		
	    </div>
	    <!-- 热门城市 end-->	    

  	</div>
</template>

<script>
import { XHeader , Icon ,Cell ,Group } from 'vux'
import AppHeader from '../../components/AppHeader.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data() {
  	return{
  	}
  },
  components:{
  	XHeader,
  	Icon,
  	Cell,
  	Group,
  	"app-header":AppHeader
  },

  methods:{
  	 GetHotCity(){
  		this.$store.dispatch("GetHotCity");
  	},
  	GetAllCity(){
  		this.$store.dispatch("GetAllCity");
  	},
  },

  computed:{
  	// 通过计算属性本地获取allCityList
  	hotCityList(){
  		return this.$store.state.hotCityList;
  	},
  	allCityList(){
  		return this.$store.state.allCityList;
  	},
  	//  A-Z 排序  String.fromCharCode(i) 返回对应码的字符 65-->A
    sortallCityList(){
        let sortobj = {};
        for (let i = 65; i <= 90; i++) {
            if (this.allCityList[String.fromCharCode(i)]) {
                sortobj[String.fromCharCode(i)] = this.allCityList[String.fromCharCode(i)];
            }
        }
        return sortobj
    }  	
  },

  created(){
  	this.GetHotCity();
  	this.GetAllCity();
  },

  mounted(){

  },




}
</script>

<style lang="less">
.ellipsis{text-overflow:ellipsis; white-space: nowrap; overflow: hidden;}
.clear{clear: both;}
.home_wrap{
	.home_header{
		a{
			font-size: 16px;
		}
	}
	.cur_location_city_wrap
	{
		border-bottom: 1px solid #E4E4E4;background: white;
		.is_link
		{
			height: 2rem;font-size: 2rem;
		}
	}

	.hot_city_wrap{
		height: 9rem;border-bottom: 1px solid #E4E4E4;background: white;
		.hot_city_hd{
			height: 3rem;line-height: 3rem;
			p{padding-left: 10px;}
		}
		.ul_list{
			width: 100%;box-sizing: border-box;position: relative;
			li{
				border:1px solid #E4E4E4;border-bottom:none;width: 24.3%;height: 3rem;float: left;list-style: none;text-align: center;line-height: 3rem;color: #3190E8;

			}
		}
	}

	.all_city_wrap{
		border-bottom: 1px solid #E4E4E4;background: white;
		.wrap{
			overflow: hidden;border-bottom: 1px solid #E4E4E4;
			.all_city_hd{
				height: 3rem;line-height: 3rem;
				p{padding-left: 10px;}
			}
			.ul_list{
				width: 100%;box-sizing: border-box;
				li{
					border:1px solid #E4E4E4;width: 24.3%;height: 3rem;float: left;list-style: none;text-align: center;line-height: 3rem;color: #666666;font-size: 0.8rem;
					a{color: #666666;}
				}
			}
		}

	}	
}



</style>
