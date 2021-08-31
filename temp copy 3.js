var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);
console.log(ws);