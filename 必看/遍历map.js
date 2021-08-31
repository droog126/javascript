let mapData=new Map();
let mapIter = mapData.entries();
console.log(mapIter.next().value);
mapData.set('hi',5)

console.log(mapData.entries().next().value[0])

console.log(Object.prototype.toString.call(mapData))
console.log(mapData.keys().next().value)