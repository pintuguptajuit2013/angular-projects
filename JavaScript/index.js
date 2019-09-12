function printName(name){

	console.log(name);
	obj.func1();
	obj.innerObj.func3();
	obj.innerObj.func2();
	obj.innerObj.func4();
}


var obj = {
	a:20,
	func1:function(){
		console.log(this);
	},
	innerObj:{
		b: 30,
		func2: function(){
			console.log(this);
		},
		func3:function(){
			setTimeout(
				function(){
					console.log(this);

			},1000);
			
		},
		func4:function(){
			setTimeout( ()=> {
				console.log(this);
			},1000);
		}
	}
};

