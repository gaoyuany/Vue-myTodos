(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el:'#app',
		data:{
			todoName:'',
			list:[
				{id:0,name:'gyyyyy',done:false},
				{id:1,name:'wccccc',done:true},
				{id:2,name:'grrrrr',done:false}
			]
		},
		methods:{
			addTodo(e){
				if(e.keyCode===13){
					this.list.push({
						id:this.list.length,
						name:this.todoName,
						done:false
					});
					
				}
			}
		}
	})

	window.vm=vm;
})(window);
