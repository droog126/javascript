const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
function deepclone(s){
    const r=s.constructor===Array ? [] : {}
    for(let key in s){
        if(s[key].constructor === Array){
            r[key]=[];
            r[key]=deepclone(s[key]);
        }else if(s[key].constructor === Object){
            r[key]={};
            r[key]=deepclone(s[key]);
        }else{
            r[key]=s[key]
        }
    }
    return r;
}
var test=deepclone(originObj)
console.log(test.c==originObj.c);

const test2=JSON.parse(JSON.stringify(originObj));
const test3=Object.assign({},originObj);

console.log(test)
console.log(test2);
console.log(test3);
//arr.constructor Array.isArray(arr) instanceof


// 利用 WeakMap 解决循环引用
let map = new WeakMap()
function deepClone(obj) {
  if (obj instanceof Object) {
    if (map.has(obj)) {
      return map.get(obj)
    }
    let newObj
    if (obj instanceof Array) {
      newObj = []     
    } else if (obj instanceof Function) {
      newObj = function() {
        return obj.apply(this, arguments)
      }
    } else if (obj instanceof RegExp) {
      // 拼接正则
      newobj = new RegExp(obj.source, obj.flags)
    } else if (obj instanceof Date) {
      newobj = new Date(obj)
    } else {
      newObj = {}
    }
    // 克隆一份对象出来
    let desc = Object.getOwnPropertyDescriptors(obj)
    let clone = Object.create(Object.getPrototypeOf(obj), desc)
    map.set(obj, clone)
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key])
      }
    }
    return newObj
  }
  return obj
}
