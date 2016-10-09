$.fn.extend({
	code : function(duration){
		var second = duration,
			_this = this,
			status = 1;
		this.text("发送验证码");
		this.click(function(){
			if(status){
				status = 0;
				var t = setInterval(function(){
					if(second === 0){
						clearInterval(t);
						status = 1;
						second = duration;
						_this.text("发送验证码");
					}else{
						_this.text(second-- + "秒");
					}
				}, 1000);
			}
		});
	}
})
$(".code").code(60);