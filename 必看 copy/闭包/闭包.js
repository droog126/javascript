


function jieliu(func,delay){
    let flag=true;
    return function(){
        if (!flag){return false}
        flag=false;
        func();
        setTimeout(()=>{
            flag=true;
        },delay)
    }
}

// var log=function(){
//     console.log('fuck')
// }

// var d_log=jieliu(log,300)

// d_log();
// d_log();
// setTimeout(d_log,400);

function debunce(func,time){
    var timer=null;
    return function(arg){
        if(timer){clearTimeout(timer)}
        timer=setTimeout(()=>{
            func(arg)
        },time);
      
    }
}
// 测试：
function log(...args) {
    console.log('log: ', args);
}
var d_log1 = debunce(log,100);

d_log1(1);    // 预期：不输出
d_log1(2);    // 预期：1s后输出
