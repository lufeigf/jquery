//html方法，类似innerHTML
//获取
console.log($("body").html());
//设置
$("body").html("<p>2333<a>666</a></p>");

//text方法，类似innerText
//获取
console.log($("body").text());
//设置
$("body").text("<p>66662333</p>");

//append方法，向子级的最后添加文本或字符串形式的标签或dom对象
$("body").append("&lt;a&gt;哈哈&lt;/a&gt;").append("<a>哈哈</a>").append("<a>哈哈</a>").append(document.createElement("ul"));
$("ul").append("<li>233</li>");

//appendTo方法，append方法的被动形式
$("<b>666</b>").appendTo("html > body"/*选择器*/);

//prepend方法，向子级的最前添加文本或字符串形式的标签或dom对象
$("body").prepend("<cf>233</cf>").prepend("&lt;cf&gt;哈哈&lt;/cf&gt;").prepend(document.createElement("p"));

//prependTo方法，prepend方法的被动形式
$("<cf>666</cf>").prependTo("html > body");

//after，为被选中的每一个标签后添加一个文本或字符串形式的标签或dom对象
$("cf").after("after");

//before，为被选中的每一个标签后添加一个文本或字符串形式的标签或dom对象
$("cf").before("before");

//如果第二个参数传入整个jq选择器，则会剪切这个标签，粘贴到每一个目标标签中
//所有的jq对dom操作的方法都拥有此特性
$("cf").append($("b"));
$("a").append($("cf"));

console.log($(document.body));

console.log($(document.body).text());

//clone方法，创建一份拷贝
$("body").append($("ul").clone().empty());

//remove方法，删除标签内部及自身
$("a b").remove();

//empty方法，清空标签内部的所有标签
$("body").empty();

//包装
$("p").wrap($("a"));