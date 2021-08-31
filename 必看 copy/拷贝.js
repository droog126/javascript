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