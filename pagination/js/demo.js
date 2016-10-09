$.fn.extend({
	pagination : function(option){
		var currentIndex = option.index || 0,
			size = option.size || 20,
			total = option.total,
			pageLen = Math.ceil(total / size),
			renderPageLen = Math.min(pageLen, 10),
			_this = this;
		function renderPagination(){
			var i = 0;
			_this.html("");
			while(i < renderPageLen){
				$("<a>" + (currentIndex + 1) + "</a>").appendTo(_this).click(function(){
					console.log($(this).index);
				}).index = currentIndex;
				i++;
			}
		}
		renderPagination();
	}
});
$(".pagination").pagination({
	index : 0,
	size : 10,
	total : 497,
	render : function(index){
		console.log(this);
	}
});