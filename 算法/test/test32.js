// function print(aaaaa){
//     console.log(aaaaa)
// }

// var n = '456486742'
// var n=n[n.length-1]
// var n=parseInt(n);

// if((n & 1) == 0){
//    print('yes')
// }else{
//    print('no') 
// }
// 　　　　



// console.log([] == ![])
// console.log( Function instanceof Object );
// console.log( Object instanceof Function );
// console.log( (function f(){}).__proto__ === Function.prototype);
// function f(){

// }
// console.log(f instanceof f);

// var arr=[41,47,89,546];
// var map={}
// var cur=0;
// for(var i=0;i<arr.length;i++){
//     var item=arr[i];
//     if(map[item]==undefined){
//         map[item]=1;
//         cur=Math.max(cur,1);
//     }else{
//         map[item]+=1;
//         cur=Math.max(cur,map[item]);
//     }
// }
// console.log(cur,map);


var str='./a/./b';
str.split('');
switch (str.length){
    case 0:
        print('./')
        break;
    case 1:
        if(str[0]=='.'){
            print('./')
        }else{
            print('./'+str[0]);
        }
        break;
    case 2:
        if(str[0]=='.'&&str[1]=='/'){
            print('./')
        }
        break;
    default:
        let r=[];
        let flag=0;
        for(let chart of str){
            if(chart=='.'){
                flag+=1;
                if(flag==2){
                    if(r.length==0){
                        return -1;
                    }
                    r.pop(chart);
                    flag=0;
                }
            }else{
                flag-=1;
                if(flag<0){
                    flag=0;
                }
                if(chart>='a'&& chart<='b'){
                    r.push(chart);
                }
            }
        }
        let rstr='.'
        for(let one of r){
            rstr+=`/${one}`
        }
        rstr=='.' ? print('./') : print(rstr);
        break;
}
