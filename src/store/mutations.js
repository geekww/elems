export default{
	// mutation 类似method 定义方法（一般为同步的）
	GetAllCity(state,data){
		state.allCityList = data.data;
	},
	
	GetHotCity(state,data){
		state.hotCityList = data.data;
	},

	// 把对象保存到 localStorage 的一个字段，已存在的不添加
	SearchHistoryToLacal(state,search_data){
		var array = [];
		console.log("local");
		if (!localStorage.SearchHistory) { //如果没有SearchHistory直接添加
			array.push(search_data);							//[{...}]
			localStorage.SearchHistory=JSON.stringify(array);	// "[{}]"  字符串。 以便localStorage直观显示
		}else{  //如果有
			var dataFromLocal = JSON.parse(localStorage.SearchHistory); //字符串转对象 [{...}]
			var flag = false;//标记是否已经存在。默认不存在（false）
			dataFromLocal.forEach(value=> {
				if (value.geohash == search_data.geohash) {
					flag = true;
				}
			});
			if (!flag) { //如果不存在（flag=false）则添加
				dataFromLocal.push(search_data);
				localStorage.SearchHistory=JSON.stringify(dataFromLocal);
				console.log(localStorage.SearchHistory)
			}

		}
	},

	// 把  搜索字符串  保存到 localStorage 的一个字段，已存在的不添加
	SearchRestranHistoryToLacal(state,search_keyword){  //search_keyword : "aa"
		var array = [];
		console.log("local RestranHistory");
		if (!localStorage.RestranHistory) { //如果没有RestranHistory直接添加
			array.push(search_keyword);							//["aa"]
			localStorage.RestranHistory=JSON.stringify(array);	// "["aa"]"  字符串。 以便localStorage直观显示
		}else{  //如果有
			var dataFromLocal = JSON.parse(localStorage.RestranHistory); //字符串转对象 ["aa","bb"....]
			var flag = false;//标记是否已经存在。默认不存在（false）
			dataFromLocal.forEach(value=> {
				if (value == search_keyword) {
					flag = true;
				}
			});
			if (!flag) { //如果不存在（flag=false）则添加
				dataFromLocal.push(search_keyword);
				localStorage.RestranHistory=JSON.stringify(dataFromLocal);
				console.log(localStorage.RestranHistory)
			}

		}
	},

	// 搜索页面相关 搜索记录  mutation  -------start------
	setRH(state,data){ //data: '["aa","bb"..]'
		state.RestranHistory = JSON.parse(data);	
	},
	//清空
    ClearRH(state){ //data: '["aa","bb"..]'
		state.RestranHistory = [];	
		localStorage.RestranHistory = [];
	},
	// 只刷新页面
	reflashRH(state){  
		state.RestranHistory = JSON.parse(localStorage.RestranHistory);	 //localStorage.RestranHistory : "['aa','bb'....]"
	},
	deleteOne(state,index){
		state.RestranHistory.splice(index,1);  //state.RestranHistory : ["aa","bb"]  

		localStorage.RestranHistory = JSON.stringify(state.RestranHistory); //" ["aa","bb"]"
		// JSON.parse(localStorage.RestranHistory).splice(index,1);
	},

	// 搜索页面相关 搜索记录  mutation  --------end------


	// 清空搜索字符串
	// ClearSearchRestranHistory(){
	// 	localStorage.RestranHistory = [];
	// },



	// 刷新后从localStorage 获取保存的 accesstoken，赋值给state;防止刷新后accesstoken清空
	setAccesstokenWhenRefresh(state){
		state.accesstoken = localStorage.getItem("accesstoken");
		state.loginname = localStorage.getItem("loginname");
	},

	setGeohash(state,geohash){
		state.geohash = geohash;
	},
	// 设置 底部（AppFooter）导航状态的值 
	setChangeActive(state,index){
		state.changeActive = index;
	}
}