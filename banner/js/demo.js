$.fn.extend({
	banner1 : function(){
		var $arrImgs = this.find("a"),
			len = $arrImgs.length;
		this._tab($arrImgs, len);
	},
	banner2 : function(option){
		var _this = this;
		$.map(option, function(item){
			$("<a></a>").appendTo(_this).css("background-image", "url(" + item + ")");
		});
		this._tab(this.find("a"), option.length);
	},
	_setCurrent : function(imgs, index){
		imgs.eq(index).addClass("current").siblings(".current").removeClass("current");
	},
	_tab : function(imgs, len){
		var _this = this,
			index = 0;
		this._setCurrent(imgs, index);
		setInterval(function(){
			index = index > len - 2 ? 0 : index + 1;
			_this._setCurrent(imgs, index);
		}, 2000);
	}
});
//数据和标签已由服务端模板渲染好
$(".banner1").banner1();
//数据由前端渲染至页面（前后端分离）
$(".banner2").banner2(["./image/1.jpg", "./image/2.jpg", "./image/9.jpg", "./image/1.jpg", "./image/2.jpg", "./image/9.jpg", "./image/1.jpg", "./image/2.jpg", "./image/9.jpg"]);