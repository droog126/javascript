/*
5 个状态，分别是 0-4
0: 还没调用open方法
1: 未调用send方法，也就是还没发送数据给服务器
2: 还没有接收到响应
3: 开始接收到了部分数据
4: 接收完成，数据可以在客户端使用了

*/
var xml = new XMLHttpRequest();
xml.open('GET', url, true);
xml.send({});

xml.onreadystatechange = state_Change();
function state_Change() {
    
}

