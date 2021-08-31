//函数的this是指向windows

// 需要实现的函数
// function repeat2 (func, times, wait) {
//     let counter=0;
//     let last_args=null;
//     function ins(args=last_args){
//         last_args=args;
//         if(counter<times){
//             counter+=1;
//             setTimeout(() => {
//                 func(last_args);   
//             }, wait);
//         }
//     }
    
    
//     return ins.bind(ins);
// }
function repeat3(func,times,wait){
    
    let counter=0;
    return function(...args){
        let timer=setInterval(() => {
            counter+=1;
            func(...args)
            if(counter==times){
                clearInterval(timer)
            }
        }, wait);
        
    }
}

// const repeatFunc = repeat3(console.log, 4, 3000)
// repeatFunc("hellworld");


//可以加入服务器的方法
function repeat (func, times, wait) { 
    return function(content){
     var count = 0;
     var interval = setInterval(function(){
         count += 1;
         func(content);
         if(count === times){    
             clearInterval(interval);    
         }
     }, wait);
}
}  
// const repeatFunc = repeat(console.log, 4, 3000)
// repeatFunc("hellworld");


var firstName = "zhengxiang";
var obj ={
   firstName : "xiong",
   waitShowName : function(){
        setTimeout(()=>{console.log(this.firstName)},1000)
        setTimeout(function(){console.log(this.firstName)},1000)
   }
};
obj.waitShowName();

