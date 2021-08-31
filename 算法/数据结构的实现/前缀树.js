//插入 让object前进 还有遍历
class Trie {
    constructor() {
      this.root = Object.create(null)
    }
    insert(word) {
        let node=this.root;
        for(let chart of word){
            if(node[chart]){
                node=node[chart]
            }else{
                node[chart]=Object.create(null);
                node=node[chart];
            }
        }
        node.isWorld=true;
    }
    traverse(word) {
        let node = this.root;
        for(let chart of word){
            if(node[chart]){
                node=node[chart]
            }else{
                return false;
            }
        }
        return node;
    }
    search(word) {
          let node=this.traverse(word);
          if(node && node.isWorld){
              return true;
          }
          return false;
    }
    startsWith(prefix) {
        let node=this.traverse(prefix);
        if(node){
            return true;
        }
        return false
    }
}
  
  