//柯里化返回的是函数对象
function cury(func,...args){
    return function(...cur_args){
        args.push(...cur_args);
        if(args.length==func.length){
           return func(...args);
        }else{
            return cury(func,...args);
        }
    }
}


function carling(func,...args){
    return function(...new_args){
        if(new_args.length==0){
            return func(args);
        }else{
            args=[...args,...new_args];
            return carling(func,...args);
        }
    }
}

function add(args){
  let r=0;
  for(let item of args){
    r+=item;
  }
  return r;
}
const c_add=carling(add);
var r=c_add(5,4)(5)(5,5,6,4)();
console.log(r);


