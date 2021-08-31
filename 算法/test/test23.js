hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}

exports.age = 18;
module.exports={tess:11}
console.log(exports)
console.log(module)

var date = new Date();
console.log(date)
var n = date.toISOString();
console.log(n);