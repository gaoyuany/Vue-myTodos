(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el:'#app',
		data:{
			todoName:'',
			stu:null,
			focusState:false,
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
			},
			delTodo(index){
				console.log(index);
				this.list.splice(index,1);
				
			},
			update(index){
				this.stu=index;
				this.focusState=true;
				
			},
			inpBlur(){
				this.stu=null;
			},
			inpKeyUp(e){
				if(e.keyCode===13){
					this.stu=null;
				}
			}
		},
		directives: {
			focus: {
				// 指令的定义
				update: function (el) {
					el.focus()
				}
			}
		}
	})

	window.vm=vm;
})(window);
