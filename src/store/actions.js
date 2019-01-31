
import axios from '../../node_modules/axios/dist/axios.min.js'
export default{

	// 类似method 定义方法（一般为异步的）
	GetAllCity(context){
		axios.get('http://cangdu.org:8001/v1/cities', {
		    params: {
		      type : "group"			//types : hot/group...
		    }
		  })
		  .then(function (response) {		//{data:{[],[]...}}
		    console.log(response);		//{[],[]...}
			    context.commit('GetAllCity',response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


	},

	GetHotCity(context){
		axios.get('http://cangdu.org:8001/v1/cities', {
		    params: {
		      type : "hot"			//types : hot/group...
		    }
		  })
		  .then(function (response) {		//{data:{[],[]...}}
		    console.log(response);		//{[],[]...}
			  context.commit('GetHotCity',response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


	},	




	

}