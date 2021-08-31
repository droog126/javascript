/*
3种状态 pending resolved reject    then catch
*/
// new Promise((resolve,reject)=>{
//     console.log('hi');
//     resolve('fuck')
// }).then((v)=>{console.log(v)});


//先要提交promise呀

/*
console.log(new Date())
async function all(promises){

    const r=[];
    var flag=false;
    for(let one of promises){
        if(!flag){
            await   one.then((val)=>{r.push(val)}).catch((val)=>{flag=true; r=val;})
        }
        
    }
    return new Promise( function(resolve,reject){
        if(flag){
            reject(r);
        }else{
            resolve(r);
        }
    })
}
all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() =>  reject(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 8000))
]).then((val)=>{
    console.log(val);
    console.log(new Date())
}).catch(()=>{console.log(new Date())})



Promise.prototype.race=(promises)=>{
    return new Promise((resolve,reject)=>{
        for(let one of promises){
            one.then((res)=>{resolve(res)}).catch((res)=>{reject(error)});
            //Promise.resolve(one).then(res=>{resolve(res),error=>{reject(error)}})
        }
    })
}


*/

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log, console.log);

function all(promise_s) {
    var ans = [];
    return new Promise((rsv, rjc) => {
        var len = promise_s.length;
        for (let i = 0; i < len; i++){
            var target = promise_s[i];
            target.then((val) => {
                ans[i] = val;
                if (ans.length == len) {
                    rsv(ans);
                }
            }).catch((err) => {
                rjc(err);
            })
        }
    })
}

all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() =>  resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 8000))
]).then((val)=>{
    console.log(val);
}).catch((err) => {
    console.log(err)
})

