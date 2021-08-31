//保存最新数据的有大小限制的缓存栈
//用map的这个去模拟
//遍历第一个是this.map.entries().next().value[0]
class LRUCache{
    constructor(size){
        this.size=size;
        this.map=new Map();
    }

    get(key){
        if(this.map.has(key)){
            let r=this.map.get(key);
            this.map.delete(key);
            this.map.set(key,r);
            return r;
        }else{
            return -1;
        }
    }

    put(key,val){
        if(this.map.has(key)){
            this.map.delete(key);
            this.map.set(key,val);

        }else if (this.map.size<this.size){
            this.map.set(key,val);
        }else{
            this.map.set(key,val);
            this.map.delete(this.map.entries().next().value[0])
            
        }

    }
}


/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */

 function LRU( operators ,  k ) {
    // write code here
    let res = [];
    let map = new Map();
    for(let i = 0; i < operators.length; i++){
        let [op, key, value] = operators[i];
        if(op === 1) {
            if(map.size >= k) {
                map.delete(map.keys().next().value)
                map.set(key, value);
            } else {
                if(map.has(key)) {
                    map.delete(key)                  
                }
                map.set(key, value);
            }
        } else if(op === 2) {
            if(!map.has(key)) {
                res.push(-1);
            } else {
                let value = map.get(key);
                res.push(value);
                map.delete(key);
                map.set(key, value);
            }
        }
    }
    return res;
}
module.exports = {
    LRU : LRU
};