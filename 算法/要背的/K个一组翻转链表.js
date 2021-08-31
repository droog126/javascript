var reverseKGroup = function(head, k) {
    let p=head;
    for(let i=0;i<k;i++){
        if(p==null){return head}
        p=p.next;
    }

    let prv=null;
    let cur=head;
    while(cur!==p){
        let next=cur.next;

        cur.next=prv;

        //这两行是由顺序的
        prv=cur;
        
        cur=next;
    }
    

 
    head.next=reverseKGroup(cur,k);

    //1-2-3   3-2-1
    //这里的prv 反转后的最后一个元素1 cur是4 
    return prv;
    
};