var str="hello world Hello WROLD"
//
console.log(str.padStart(50,'a'))

//正则匹配
console.log(str.match(/l/g))

//正则替换
console.log(str.replace(/l/g,'1'))

//正则搜索
console.log(str.search(/(l)/g))

//查看是否有该子串
//返回true
console.log(str.includes('hello'))

//返回第一次匹配的位子  第二个参数是从哪里开始
console.log(str.indexOf('world'))

//返回最后一次匹配的位子
console.log(str.lastIndexOf('l'))

//转换为小写
console.log(str.toLocaleLowerCase())

//转换为大写
console.log(str.toLocaleUpperCase())

//字符串索引
console.log(str.charAt(0));

//字串串unicode
console.log(str.charCodeAt(0));

//字符串切割
console.log(str.slice(-5,));


