
function solution(string) {
    const r=new Set();
    let dfs=function(stack,set){
        if(stack.length==string.length){
            r.add(stack.join(''))
            return
        }
        for(let index in string){
            if(!set.has(index)){
                stack.push(string.charAt(index));
                set.add(index);
                dfs(stack,set);
                stack.pop();
                set.delete(index);
            }
        }
        
    }
    dfs([],new Set());
    console.log(Array.from(r))
// 请在这里根据要求补充函数体代码 
}

// //solution("a") //=> ["a"]
// solution("ab")// => ["ab", "ba"]
solution("aabb")