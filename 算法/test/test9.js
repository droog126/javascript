// 实现 curry函数， 支持以下功能

var abc = function(a, b, c) {
    console.log(a,b,c)
    return [a, b, c];
  };
   
var curried = curry(abc);
   
//curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

//curried(1, 2, 3);
// => [1, 2, 3]

function curry(func,all_argus=[]){
   
    return function(...cur_argus){
        all_argus=[...all_argus,...cur_argus];
        if(all_argus.length==3){
            func(...all_argus);
        }else{
            return curry(func,all_argus)
        }
    }
}