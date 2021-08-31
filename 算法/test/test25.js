// var output = (function(x)
// {
//   delete x;
//   return x;
// }
// )(0);
// console.log(output);

// var a=Object.create({a:5})
// console.log(a,a.__proto__)


var a=10

function func(){
    console.log(this)
    console.log(this.a);
}

var test={
    a:1,
    test:{
        a:2,
        test:function(){
            console.log(a)
            console.log(this)
            console.log(this.a)
            func();
        }
    }
}

test.test.test()


var a = 1;
function b(){
    var a = 2;
    return function(){
        console.log(a);
    }
}
// {
//     let a=100;
//     var test1=test.test.test;

//     test1();
// }
// test1();

(function(){
    var c=b=5;
    console.log(c);
})();
console.log(b);  //本来b也读不出来 只是因为 b=5；所以读出来了
console.log(c);  

