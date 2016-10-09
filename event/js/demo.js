//普通事件
$("li").click(function(e){
	console.log(e);
	console.log(123);
});
$("li:nth-child(even)").mouseenter(function(){
	console.log("enter even");
}).next().mouseenter(function(){
	console.log("enter odd");
});
$("li:nth-child(odd)").mouseenter(function(){
	console.log("enter odd");
});
// $(window).scroll(function(){
// 	console.log("scroll");
// }).resize(function(){
// 	console.log("resize");
// }).click(function(){
// 	$(document.body).css("background-color", "red");
// }).click(function(){ //事件重载
// 	console.log("click");
// });

// // 事件重写
// onclick = function(){
// 	console.log(123);
// };
// onclick = function(){
// 	console.log(321);
// };

// // 事件重载
// window.addEventListener("click", function(){
// 	console.log(123);
// }, 0);
// window.addEventListener("click", function(){
// 	console.log(321);
// }, 0);

//on事件，事件也会重载
$("p").on("click", function(){
	console.log(123);
}).on("click", function(){
	console.log(321);
}).on("click", function(){
	console.log(this.innerHTML, $(this).html());
});

//！！！后添加到页面里的元素是不会拥有前面添加过的对应事件监听！！！
$("body").append("<p>6666</p>");

setTimeout(function(){
	$("<a>哈哈</a>").click(function(){
		console.log($(this).text());
	}).appendTo("body");
}, 200);

//事件代理，此标签的事件只能被其父级或其父级的父级及以上所代理，不能被兄弟或子级代理
$("body").delegate("a", "click", function(){
	//this指向触发事件的这个标签的dom对象
	console.log($(this).html() + 1);
});

//触发一次，移除时只移除被触发过的这个标签上的事件，不会全部移除
$(".c").one("click", function(){
	console.log($(this).text());
});