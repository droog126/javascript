var str="sdsadadsdddas";
//字符串相加
str+='s  s'
console.log(str);
//字符串替换
var r=str.replace(/ /g,'%20');
console.log(r)
//字符串转化为数字
console.log(Number.parseInt("121212121212"));
//str.split()
console.log(str.split('d'));
//str是可以比大小的
console.log(parseInt('212122'))

var s = "hello";
( s.substr(1,4) == "ello" ) // true

var s = "hello";
( s.substring(1,4) == "ell" ) // true

str.charAt(2);

//
str.indexOf('c');
//从五开始
str.indexOf('c',5);

//S.substr(0,length).replace(/ /g,"%20")

//字符串转化为数字
//Number.parseInt("123")