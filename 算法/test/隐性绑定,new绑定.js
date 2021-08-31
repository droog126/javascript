var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
// 由于new绑定的优先级大于bind绑定，所以函数内部this还是obj {}


setTimeout(function() {
    console.log(window.name); //global
}, 0);
console.log(bar.name); //foo
  
var bar3 = bar2 = bar; //bar2=bar bar3=bar2
bar2.name = 'foo2';
console.log(bar3.name); //foo2