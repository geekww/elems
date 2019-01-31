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
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    	</ul>
		    </div>	 
	    </div>
	    <!-- 热门城市 end-->
	    <!-- 所有 start-->
	    <div class="all_city_wrap">
	    	<div class="all_city_hd">
	    		<p>A <span>(按照字母排序)</span>  </p>
	    	</div>
		    <div class="all_list_wrap">
		    	<ul class="ul_list">
		    		<a href=""><li class="ellipsis">厦门厦门厦门厦门厦门厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    		<a href=""><li>厦门</li></a>
		    	</ul>
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
  		msg:'hhh'
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
  	
  },

  created(){

  },

  mounted(){

  },




}
</script>

<style lang="less">
.ellipsis{text-overflow:ellipsis; white-space: nowrap; overflow: hidden;}
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
			width: 100%;box-sizing: border-box;
			li{
				border:1px solid #E4E4E4;border-bottom:none;width: 24.5%;height: 3rem;float: left;list-style: none;text-align: center;line-height: 3rem;color: #3190E8;
			}
		}
	}

	.all_city_wrap{
		border-bottom: 1px solid #E4E4E4;background: white;
		.all_city_hd{
			height: 3rem;line-height: 3rem;
			p{padding-left: 10px;}
		}
		.ul_list{
			width: 100%;box-sizing: border-box;
			li{
				border:1px solid #E4E4E4;width: 24.5%;height: 3rem;float: left;list-style: none;text-align: center;line-height: 3rem;color: #666666;
			}
		}
	}	
}



</style>
