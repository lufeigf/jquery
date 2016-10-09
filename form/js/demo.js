//表单二提交
$(".form2 input[type=\"button\"]:first").click(function(){
	$(".form2").submit();
});
//表单二重置
$(".form2 input[type=\"button\"]:last").click(function(){
	$(".form2")[0].reset();
});

//表单三提交
$(".form3 input[type=\"button\"]").click(function(){
	$.ajax({
		type : "post",
		url : "http://www.ikindness.cn/api/test/post",
		data : {
			input : $(".input").val(),
			test : $(".test").val()
		},
		success : function(data){
			console.log(data);
		}
	});
});

//表单四
$(".form4 input[type=\"button\"]").click(function(){
	//jq包装后的表单对象的serializeArray方法，把键值对组合到数组中
	console.log($(".form4").serializeArray());
	//get提交
	$.ajax({
		//jq包装后的表单对象的serialize方法，同之前原生ajax方法封装中的queryString方法
		url : "http://www.ikindness.cn/api/test/get?" + $(".form4").serialize(),
		success : function(data){
			console.log(data);
		}
	});
});

//一键提交
$(".submitAll").click(function(){
	$(".submit").click();
});

//一键重置
$(".resetAll").click(function(){
	$("form").each(function(index, item){
		item.reset();
	});
});