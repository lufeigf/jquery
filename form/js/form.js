$(".hack").focus(function(){
	$(this).removeClass("holder").val("");
});
$("input:not([type=\"submit\"])").addClass("holder");
$(".iptContract").blur(function(){
	$(this).val() || $(this).val("项目合同金额").addClass("holder");
});
$(".iptApply").blur(function(){
	$(this).val() || $(this).val("材料采购金额").addClass("holder");
});
$(".empty").keyup(function(){
	var value = $(this).val();
	//不使用正则的非空校验
	// $(this).parent().next().html(~value.indexOf(" ") || ~value.indexOf("\t") ? "项目名称不能包含空格" : "");
	//使用正则的非空校验
	var $parent = $(this).parent();
	$parent.next().html(/\s/.test($(this).val()) ? $parent.prev().text().split(/：/)[0] + "不能包含空格" : "");
});
$(".number").keyup(function(){
	var $parent = $(this).parent();
	$parent.next().html(/\D/.test($(this).val()) ? $parent.prev().text().replace(/：/, "") + "只能是数字" : "");
});


//正则表达式
//Regular Expression
//RegExp

//正则表达式的字面量
var reg1 = /a/;

//实例化正则对象
var reg2 = new RegExp("a");


//字符串结合正则


//字符串的正则匹配方法search
//类似indexOf，但是参数可接收正则表达式，返回值是正则表达式匹配到的下标
console.log("\tcat".search(reg1));

//字符串的replace方法第一个参数也能接收正则表达式，替换被正则匹配到的内容
console.log("\tcata".replace(reg2, "u"));

//字符串的split方法参数也能接收正则表达式，根据正则表达式的规则进行字符串切割
console.log("\tcat".split(reg2));

//字符串的match方法，返回匹配到的字符串部分的集合
console.log("\tcata".match(reg1));


//正则对象的匹配方法


//test方法去检测字符串是否有匹配到正则表达式，返回值为boolean
console.log(reg1.test("\tcut"));


//正则表达式规则

console.log(/asdf/.test("asdasdasd"));

//标识符

//i
//即ignore case不区分大小写
console.log(/asdf/i.test("ASdf"));

//g
//即global匹配所有
console.log("asdasdfasdasdfasd".match(/asdf/g));

console.log("asdaSdFasdAsdfasdasdf".match(/asdf/ig));

//特殊元字符

//\t
//即tab匹配制表符
console.log("----\\t----");
console.log("asdasdfasd	asdfasd".match(/\t/));

//\r
//即return匹配回车符
console.log("asdas\rdfas".match(/\r/));

//\n
//即newline匹配换行符
console.log("asdas\ndfas".match(/\n/));


//以下大写的元字符匹配规则，表示对小写匹配规则的取反
//\s
//即space匹配空格及制表符及换行符
console.log("----\\s----");
console.log("asd  asd  fasd	asdf \r asd".match(/\s/g));
console.log("asd  asd  fasd	asdf \r asd".match(/\S/g));

//\d
//即digit匹配0到9的数字
console.log("----\\d----");
console.log("12345asdf-=12334".match(/\d/g));
console.log("12345asdf-=12334".match(/\D/g));

//\w
//即word匹配0到9的数字及大小写英文字母及下划线
console.log("----\\w----");
console.log("owqers(%**&1232_123".match(/\w/g));
console.log("owqers(%**&1232_123".match(/\W/g));

//\b
//即block匹配单词边界
console.log("----\\b----");
console.log("internationalization"/*i18n网站国际化*/.match(/inter\b/));
console.log("internationalization"/*i18n网站国际化*/.match(/inter\B/));

//.
//匹配所有
console.log("myhsoirjw3l4b23li14bk\r\d\w)&^$)".match(/./g));

//\转义
//[]().\/?+*^${}
console.log("()".match(/\(\)/g));
console.log("\\b".match(/\\b/));

//中括号区间
//中括号里的0123即0或1或2或3
console.log("07091235".match(/[0123]/g));

//0-5即0到5
console.log("07091235".match(/[0-5]/g));

//a-z即a到z
console.log("0asdf123@a".match(/[a-z]/g));

//A-Z即A到Z
console.log("0asSDER23@a".match(/[A-Z]/g));

//a-zA-Z即a到z及A到Z
console.log("0asSDER23@a".match(/[a-zA-Z]/g));

//中括号里的asdf即a或s或d或f
console.log("asdf)s^(d)&f21a1".match(/[asdf]/g));

console.log("asdf)s^(d)&f21a1".match(/[\d]/g));

console.log("asdf  )s^\t(d)&f21a1".match(/[\w]/g));

console.log("asdf]  )s^\t(d)&f21a1".match(/[\w[\s\w]]/g));

//注意区别
console.log("asdf  )s^9\t(d)&f21a1".match(/\w\s/g));

//^对中括号内规则的取反
console.log(/[^\d]/g.test("123*1asdf23"));

//数量级
//单独使用时表示数量级尽量多得去匹配，贪婪
//在数量级后添加?一同使用时，知足

//*匹配前一个规则任意次，如果这个规则匹配到了0次，也会算作匹配到，匹配的内容为""
console.log("123".match(/\d*/));
console.log("asd21341)(s*^(".match(/\d*/g));
console.log("asd21341)(s*^(".match(/[\d*]/g));
console.log("asd21341)(s*^(".match(/\d*?/g));

//?匹配前一个规则0次或1次
console.log("123".match(/\d?/g));
console.log("123".match(/\d??/g));

//+匹配前一个规则至少一次
console.log("123asdf214".match(/\d+/g));
console.log("123asdf214".match(/\d+?/));

//{m}匹配前一个规则m次
console.log("120803a123sdf2asdf14".match(/\d{3}/g));
console.log("120803a123sdf2asdf14".match(/\d{3}?/g)); //没意义

//{m,}匹配前一个规则至少m次
console.log("120803a123sdf2asdf14".match(/\d{3,}/g));
console.log("120803a123sdf2asdf14".match(/\d{3,}?/g)); //同{3}

//{0,m}匹配前一个规则最多m次
console.log("120803a123sdf2asdf14".match(/\d{0,3}/g));
console.log("120803a123sdf2asdf14".match(/\d{0,3}?/g)); //同{0}

//{m, n}自定义匹配前一个规则的次数，匹配前一个规则m次至n次
console.log("120803a123sdf2asdf14".match(/\d{1,4}/g));
console.log("120803a123sdf2asdf14".match(/\d{1,4}?/g)); //同{1}

//非中括号里的^以后面的规则由字符串开始
console.log("123213".match(/^\d/));
console.log("asdf123".match(/^\d/));
console.log("123asfd123".match(/^\d+/));

//$以前面的规则由字符串结束
console.log("123213".match(/\d$/));
console.log("123asdf".match(/\d$/));
console.log("123asfd123".match(/\d+$/));

//不是0-2469，正则表达式按单个字符计算规则
//匹配手机号
console.log(/^1[^0-2469]\d{9}$/.test("173456781011"));

//()表示分组
console.log("asd1d2d3080(^(^)(asd8d0".match(/as(d\d)+/g));

//|表示或者
console.log("asd1d2d3080(^(^)(asd8d0".match(/[a-c]|\d/g));

//匹配身份证号码，不计润平年
console.log(/^((1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[12])\d|8(86|5[23]))\d{3}(19\d{2}|20(0\d|1[0-6]))((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[469]|11)(0[1-9]|[12]\d|30)|02(0[1-9]|[12]\d))\d{3}[\dxX]$/.test("332521196902060091"));
console.log("332521196902060091".match(/^((1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[12])\d|8(86|5[23]))\d{3}(19\d{2}|20(0\d|1[0-6]))((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[469]|11)(0[1-9]|[12]\d|30)|02(0[1-9]|[12]\d))\d{3}[\dxX]$/));

console.log(/^<([a-z]+[a-z\d]*)>.*<\1>$/.test("<div>233</div>"));