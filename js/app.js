(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el:'#app',
		data:{
			todoName:'',
			stu:null,
			focusState:false,
			list:[]
		},
		methods:{
			addTodo(e){
				if(e.keyCode===13){
					this.list.push({
						id:this.list.length,
						name:this.todoName,
						done:false
					});
					this.todoName='';
				this.setlocal();
					
				}
			},
			delTodo(index){
				console.log(index);
				this.list.splice(index,1);
				this.setlocal()
				
			},
			update(index){
				this.stu=index;
				this.focusState=true;
				this.setlocal()
				
			},
			inpBlur(){
				this.stu=null;
			},
			inpKeyUp(e){
				if(e.keyCode===13){
					this.stu=null;
				}
			},
			setlocal(){
				let str=JSON.stringify(this.list)
				localStorage.setItem('todos',str);
			},
			clearList(){
				this.list=[];
				this.setlocal()

			}
		},
		directives: {
			focus: {
				// 指令的定义
				update: function (el) {
					el.focus()
				}
			}
		},
		mounted() {
			if(!localStorage.getItem("todos")){
				localStorage.setItem("todos",JSON.stringify([]));
			}
				this.list=JSON.parse(localStorage.getItem("todos"))
		},
		computed:{
			leftCount(){
				return this.list.filter(item=>!item.done).length;
			},
			footerStatu(){
				return this.list.length;
			}
		}
	})

	window.vm=vm;
})(window);
