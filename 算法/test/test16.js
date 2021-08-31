function test(){
}
var ins=new test();

ins.test()

test.prototype.test=function(){
    console.log('hi');
}

