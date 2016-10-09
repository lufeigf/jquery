//类似querySelectorAll
console.log($("li:not(:last-child) + li"));

//选择方法

//eq方法，索引
console.log($(".l").eq(3));
console.log($(".l:eq(3):eq(0):eq(0)"));
console.log($("ul .l:eq(3)").eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0).eq(0));

function People(){
	this.walk = function(){
		console.log("walk");
		return this;
	};
	this.run = function(){
		console.log("run");
		return this;
	};
	this.laugh = function(){
		console.log("laugh");
		return this;
	};
}
console.log(new People().walk().run().laugh().laugh().laugh().laugh().laugh());

//find方法，查找子级
console.log("-------find------");
console.log($("body").find(/*筛选条件，传空则查询结果为空*/));
console.log($("body").find("#a").find("span"));

/*以下所有方法如果没有筛选条件，则返回所有查找到的结果*/

//children方法，查找直接子级
console.log("-------children------");
console.log($("body").children(/*筛选条件*/));
console.log($("html").children("ul").children("li"));

//siblings方法，查找兄弟
console.log("------siblings------");
console.log($(".c").siblings(/*筛选条件*/));
console.log($(".c").siblings(".d"));

//prev方法，查找前一个兄弟标签
console.log("------prev------");
console.log($(".b").prev(/*筛选条件*/));

//prevAll方法，查找前所有兄弟标签
console.log("------prevAll------");
console.log($(".c").prevAll(/*筛选条件*/));

//next方法，查找后一个兄弟标签
console.log("------next------");
console.log($(".b").next(/*筛选条件*/));

//nextAll方法，查找后所有兄弟标签
console.log("------nextAll------");
console.log($(".b").nextAll(/*筛选条件*/));

//parent方法，查找当前标签的父级标签
console.log("------parent------");
console.log($(".b").parent(/*筛选条件*/));

//综合使用
console.log($("a").next().children().parent().nextAll().eq(2));