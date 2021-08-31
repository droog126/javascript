var objj = {
    foo : 'test',
    bar : {
        id : {id:5},
        name : 'tx'
    },
    arr: [1,2],
    items: [{
        id: 456
    }]
};

let tostring=function(obj,lastkey){
    for(let key in obj){  
        let val=obj[key];
        if(lastkey!=''){
            key=lastkey+'.'+key;
        }
        if(val.constructor == Array){
            tostring(val,key);
        }else if(val.constructor == Object){
            tostring(val,key);
        }else{
            console.log(key,'=',val);  
        }
    }
}
// tostring(objj,'')

Object.prototype.toString=function(obj=this,lastkey=''){
    for(let key in obj){  
        let val=obj[key];
        if(lastkey!=''){
            key=lastkey+'.'+key;
        }
        if(val.constructor == Array){
            tostring(val,key);
        }else if(val.constructor == Object){
            tostring(val,key);
        }else{
            console.log(key,'=',val);  
        }
    }
}
objj.toString();

// obj.toString( ), 控制台会输出：

// >  foo=test
// >  bar.id=123
// >  bar.name=tx
// >  arr.0=1
// >  arr.1=2	
// >  items.0.id=456
