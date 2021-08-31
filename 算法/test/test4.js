
// 优先找 时间开始最早的  和 时间持续最短的  通过这两个因数遍历出最好的结果
                
var input=[{start:'9:00',end:'10:00'},{start:'10:00',end:'11:00'},{start:'9:30',end:'12:00'},{start:'9:00',end:'11:30'},{start:'11:00',end:'11:30'},{start:'14:30',end:'16:00'},{start:'17:00',end:'18:00'},{start:'19:30',end:'21:00'},{start:'19:00',end:'20:00'}]

function input_to_arr(input){
    let arr=[]
    for(let item of input){
        let one=item.start.split(':');
        one=parseInt(one[0])*100+parseInt(one[1])
    
        let two=item.end.split(':');
        two=parseInt(two[0])*100+parseInt(two[1])
    
        arr.push([one,two])
    }
    return arr;
}

function arr_to_input(arr){
    let input=[]
    for(let item of arr){
        let one_num=String(item[0]);
        let one_str=`${one_num.slice(0,one_num.length-2)}:${one_num.slice(one_num.length-2,one_num.length)}`

        let two_num=String(item[1]);
        let two_str=`${two_num.slice(0,two_num.length-2)}:${two_num.slice(two_num.length-2,two_num.length)}`

        input.push({start:one_str,end:two_str})
    }
    return input; 
}

//思路 :一步一步来 先找到必须参加的会议 然后根据剩下的时间找到必须参加的会议
function maxevents(arr){
    let r_arr=[];
    //let arr1 = arr.sort((a, b) => a[1] - b[1]);
    arr.sort((a, b) => a[0] - b[0]);
    console.log('原会议:',arr);
    let flag=true;
    while(flag){
        let cur_arr=arr[0];
        console.log('当前参照会议:',cur_arr)
        let cur_arrs=[];
        for(let index in arr){
            let item=arr[index];
            if(has_jiaoji(cur_arr,item)){
                cur_arrs.unshift(item);
            }else{
                arr=arr.slice(index);
                break;
            }
        }
        

        for(let index in cur_arrs){
            if(cur_arr[1]>cur_arrs[index][1]){
                    cur_arr=cur_arrs[index];
            }
        }
        console.log("剩余会议:",arr,"当前交集会议:",cur_arrs,'确定的会议:',cur_arr);
        r_arr.push(cur_arr);
        //跳出条件
        if(cur_arrs.length==arr.length){flag=false}
        cur_arrs=[];
    }
    return r_arr;
}

function has_jiaoji(arr,arr1){
    if(arr1[0]>= arr[0] && arr1[0]<arr[1]){
        return true;
    }
    return false;
}
var arr=input_to_arr(input);

arr=maxevents(arr);
var output=arr_to_input(arr);
console.log(output)