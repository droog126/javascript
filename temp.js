/*
1、 设计一个简单的红绿灯策略，比如红灯亮分别为
console.log(“red”)这种，要求按照红2s-
黄1s-绿1s顺序不断循环展示。
*/

// function get_time(count){
//     var count=0;
//     switch (count){
//         case 0:
//             var time=2000;
//             break;
//         case 1:
//             var time=1000;
//             break;
//         case 2:
//             var time=1000;
//             break;
//     }  
//     return time;
// }


function get_func(count){
    console.log(new Date());
    switch (count){
        case 0:
            console.log('red')
            break;
        case 1:
            break;
        case 2:
            console.log('yellow');
            break;
        case 3:
            console.log('green');
            break;
    }  
}

const run=(function test(){
    var count=0;
    return function(){
        setInterval(() => {
            if(count>=4){
                count=0;
            }
            get_func(count);
            count++;
        }, 1000);
    }
})()
run();



/*
2、完成下面函数，对输入的数组去重，返回新的没有重复项的数组

*/
const uniqueArray = (arr) => {
    return    Array.from(new Set(arr));    
}
const a = ['1', '2', '3', 1, '2', undefined, undefined, null, null, 1, 'a','b','b'];
console.log(uniqueArray(a)); // ["1", "2", "3", 1, undefined, null, "a", "b"]
