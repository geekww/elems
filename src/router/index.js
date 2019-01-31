import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import HelloWorld from '@/components/HelloWorld'
// import App from '../App.vue'
// import Home from '../pages/home/Home.vue'
// import SelectCity from '../pages/SelectCity/SelectCity.vue'
// import MySite from '../pages/MySite/MySite.vue'
// import Search from '../pages/Search/Search.vue'
// import OrderList from '../pages/OrderList/OrderList.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Shop from '../pages/Shop/Shop.vue'
// 
const App = () => import('../App.vue')
const Home = () => import('../pages/home/Home.vue')
const SelectCity = () => import('../pages/SelectCity/SelectCity.vue')
const MySite = () => import('../pages/MySite/MySite.vue')
const Search = () => import('../pages/Search/Search.vue')
const OrderList = () => import('../pages/OrderList/OrderList.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Shop = () => import('../pages/Shop/Shop.vue')


Vue.use(Router)


  const routes = [
    // 首页 index.html
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App,
    //   children:[		//二级路由
    //   	{
    //   		path:'/',
    //   		redirect:'/home'
    //   	},	
    //   	{
    //   		path:'/home',
    //   		name:'Home',
    //   		component:Home
    //   	},
    //   	{
    //   		path:'cities/:id',
    //   		name:'SelectCity',
    //   		component:SelectCity
    //   	},
    //     {
    //       path:'/search',
    //       name:'Search',
    //       component:Search
    //     },
    //     {
    //       path:'/mysite',
    //       name:'MySite',
    //       component:MySite,
    //       children:[        //首页的二级路由
    //         {
    //           path:'shop',
    //           name:'Shop',
    //           component:Shop
    //         },
    //       ]
    //     },
    //     {
    //       path:'/order',
    //       name:'OrderList',
    //       component:OrderList
    //     },
    //     {
    //       path:'/profile',
    //       name:'Profile',
    //       component:Profile
    //     }

    //   ]
    // }, 

    // 取消APP 级别的路由

    {
      path:'/',
      redirect:'/home'
    },  
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'cities/:id',
      name:'SelectCity',
      component:SelectCity
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/mysite',
      name:'MySite',
      component:MySite
    },
    {
      path:'/shop',
      name:'Shop',
      component:Shop
    },    
    {
      path:'/order',
      name:'OrderList',
      component:OrderList
    },
    {
      path:'/profile',
      name:'Profile',
      component:Profile
    }   
  ]



const router = new Router({
    routes
});




export default router;