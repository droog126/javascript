setTimeout(function(){console.log(1)},0);

new Promise(function(resolve,reject){
   console.log(2);
   setTimeout(function(){resolve()},0)
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);