//xhr发送请求的过程
xhr=new XMLHttpRequest();
xhr.open('get','url',true);
xhr.send();
xhr.onreadystatechange=function(){
    switch (xhr.readyState) {
        case 0:
            //open
            break;
        case 1:
            //send
            break;
        case 2:
            //fanhui
            break;
        case 3:
            //bufen
            break;
        case 4:
            //quanbu
            break;
    }
}

//获取dom元素的方法

//通过id获取
document.getElementById('id');
//通过元素名字获取
document.getElementsByName('name');
//通过标签获取 div
document.getElementsByTagName('div');
//通过类名
document.getElementsByClassName('hi');

//通过选择器获取元素
//就是想style 的选择器写法 div#id.class
document.querySelector("*");
document.querySelectorAll('*');


//xptah

//vue slot


//再来一种水平居中


//关键字搜索框

//比较版本号 
Number.parseInt()

//虚拟dom及优缺点
第一次慢后面快

//称球



const xml=new XMLHttpRequest();
xml.open()
switch (xml.onreadystatechange) {
    case xml.readyState:
        
        break;

    default:
        break;
}

//394字符串解码·
//200岛屿数量