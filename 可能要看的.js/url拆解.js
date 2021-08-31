var str='http://sample.com/?a=1&e&b=2&c=xx&d#hash';
function getQueryObj(url) {
    let arr=str.split('?')[1].split('#')[0].split('&');
    const r={

    }
    for(let item of arr){
        let [key,val]=item.split('=');
        if(!val){
            r[key]=''
        }else{
            r[key]=val
        }
    }
    return r;
     
}
console.log(getQueryObj(str))