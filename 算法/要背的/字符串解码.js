// num [ ]  chart      
// r=str.pop()+r.repeat(count);
 var decodeString = function(s) {
    let r='';
    let num='';
    let numstack=[];
    let strstack=[];
    
    for(let chart of s){
        if(!isNaN(chart)){
            num+=chart;
        }else if(chart=='['){
            numstack.push(num);
            strstack.push(r);
            r='';
            num='';
        }else if(chart==']'){
            let count=Number(numstack.pop())
            r=strstack.pop() + r.repeat(count)
        }else{
            r+=chart;
        }
    }
    return r;
};