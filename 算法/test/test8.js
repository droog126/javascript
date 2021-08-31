
var object = { 'a': [{ 'b': { 'c1': 3 } },1] };
get(object, 'a[1]');
function get(obj,str){
    let r=obj;

    let cur_index='';
    for(let chart of str){
        if(chart=='['){
            cur_index+='.';
        }else if(chart==']'){
            
        }else{
            cur_index+=chart;
        }
    }

    console.log(cur_index)
    cur_index=cur_index.split('.');
    console.log(cur_index)
    for(let index of cur_index){
        r=r[index];
        console.log(r);
    }
    
    
 
}