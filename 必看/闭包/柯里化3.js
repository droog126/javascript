
// function curry(fn) {
//     let judge = (...args) => {
//         if (args.length == fn.length) return fn(...args)
//         return (...arg) => judge(...args, ...arg)
//     }
//     return judge
// }



// //初始参数个数 等于 接下
// function curry(fn){
//     let judge=(...args)=>{
//         if(args.length==fn.length)return fn(...args)
//         else{
//             return (...arg) => judge(...args, ...arg)
//         }
//     }
//     return judge
// }


function curry(fn) {
    let judge = (...args) => {
        if (fn.length == args.length) {
            return fn(...args);
        } else {
            return (...more_args) => {
                return judge(...args, ...more_args);
            }
        }
    }
    return judge;
}


function add(a, b, c) {
    console.log(a+b+c)
    return a + b + c
}
let addCurry = curry(add)
let r=addCurry(1)(2, 3)
