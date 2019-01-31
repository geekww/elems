<template>
  <div class="hd_wrap">
    <x-header :left-options="{backText:'',showBack:isShowBack}" >

      <!-- 左边显示返回时，title不加 链接 -->
      <strong v-if="isShowBack" ><span v-if="isShowTitle">{{title}}</span></strong>
      
      <!-- 左边显示搜索时（不显示返回），title加 返回城市选择的 链接  -->
      <router-link :to='{path:"/home"}' v-if="!isShowBack">
         <strong v-if="isShowTitle">{{title}}</strong>
      </router-link>
      <!-- 左边显示搜索 -->
      <a @click="goSearch()" v-if="!isShowBack" slot="left"><x-icon type="ios-search" size="30" class="x-icon-search-white"></x-icon></a>
      <a slot="right"></x-icon>登入 | 注册</a>
      
    </x-header>
  </div> 
</template>

<script>
import { XHeader , Icon } from 'vux'


export default {
  components: {
    XHeader,
    Icon
  },
  data () {
    return {
      isShowTitle:true,
      // isShowBack:true     //是否显示返回图标；true 显示，false不显示。
    }
  },

  // props接收父组件的数据title ，父组件没传title时  默认
  props:{
    title:{
      default:"默认"
    },
    isShowBack:{
      default:true
    }
  },

  methods:{
    goSearch(){
      this.$router.push('/search');
    }
  },

  

}
</script>

<style>
.hd_wrap{width: 100%;height: 3rem;position:fixed;top: 0;left: 0;z-index: 100;}
.x-icon-search-white{fill: white;margin-top: -5px;}
.hd_wrap a{color:white;}
</style>
