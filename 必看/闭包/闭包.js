

// function jieliu(func, time) {
//     var last_time = Date.now();
//     return function () {
//         var cur_time = Date.now();
//         if (cur_time > last_time) {
//             func();
//             last_time = Date.now() + time;
//         }
//     }
// }
// var log=function(){
//     console.log('fuck')
// }

// var d_log=jieliu(log,300)

// d_log();
// d_log();

// function debunce(func, time) {
//     var timer = null;
//     return function () {
//         if (timer == null) {
//             timer=setTimeout(() => {
//                 func();
//             }, time);
//         } else {
//             clearTimeout(timer);
//             timer=setTimeout(() => {
//                 func()
//             }, time);
//         }
//     }
// }


// // 测试：
// function log(...args) {
//     console.log('log: ', args);
// }
// var d_log1 = debunce(log,100);

// d_log1(1);    // 预期：不输出
// d_log1(2);    // 预期：1s后输出
