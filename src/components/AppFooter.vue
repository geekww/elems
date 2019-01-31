<template>
  <div class="fd_wrap">
      <ul>
        <!-- 0 === 0 当当前li的index === changeActive值时 添加active类  
          :class="{active:changeActive == 0}"  
          :class="{active:changeActive == 1}"
          :class="{active:changeActive == 2}"
          :class="{active:changeActive == 3}"
        -->
        <li v-for="(nav,index,key) of navLists" :class="{active:changeActive === index}" @click="changeToActive(index)" >
            <i class="iconfont" v-bind:class="nav.icon"  ></i>
            <p>{{nav.text}}</p>
        </li>       

      </ul>
  </div> 
</template>

<script>
 import {mapState} from 'vuex'
import MySite from '../pages/MySite/MySite.vue'


export default {
  components: {
  },
  data () {
    return {
      isShowTitle:true,
      // isShowBack:true     //是否显示返回图标；true 
      navLists:[
          {
              "icon":"icon-shouye",
              "text":"首页"                     
          },
          {
              "icon":"icon-sousuo",
              "text":"搜索"                     
          },
          {
              "icon":"icon-shouji",
              "text":"订单"                        
          },
          {
              "icon":"icon-04",
              "text":"我的"                     
          }
      ],
      // changeActive:0,
    }
  },
  computed:{
   ...mapState([
     // 映射 this.geohash 为 store.state.geohash
        'geohash',
        'changeActive'
    ]),
  },


  methods:{
    // 动态添加active 的class    click事件
    changeToActive(index){
      /* 
      通过本地的 this.changeActive=index 赋值改变changeActive值，不能【实时】的切换状态，需要存储到state里去，通过...mapState 实时映射this.changeActive值，实现实时切换
          注意：要求实时的数据都需要保存到vuex的state里去
      */
      // this.changeActive = index;
      this.$store.commit("setChangeActive",index);
      if (index == 0) {
        var geohash = this.geohash;
        this.$router.push({name:'MySite', query: {geohash}});
      }else if (index == 1) {
        this.$router.push({path:'/search'});
      }
      else if (index == 2) {
         this.$router.push({path:'/order'});
      }else if (index == 3) {
         this.$router.push({path:'/profile'});
      }
    },



  }, 

  

}
</script>

<style>
    .fd_wrap{height: 3rem;border-top: 1px solid gray;width: 100%;position: fixed;bottom: 0;left: 0;z-index: 100;background: #F2F2F2;}
    .fd_wrap ul{display: flex;}
    .fd_wrap ul li{flex: 1;list-style: none;text-align: center;height: 3rem;color: #A4A4A4;}
    
    /*通过line-height 调节i p 的位置*/
    .fd_wrap li i{font-size: 1.5rem;width: 1rem;height: 1rem;line-height: 2rem;}
    .fd_wrap li p{font-size: 0.5rem;line-height: 0.5rem;}
    .fd_wrap ul li.active i,.fd_wrap ul li.active p{color: #3190E8;}
</style>
