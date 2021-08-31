//cur prv next 存储next cur.next=prv 
//cur的下一个指向null
var reverseList = function(head) {
    let cur=head;
    let prv=null;
    while(cur){    
        let next=cur.next;
        cur.next=prv;

        prv=cur;
        cur=next;
    }
    return prv
};

// null(prv) -> -(cur) -(next)
// null(pvr)  <- .(cur) .(next);
//               .prv     cur
function reverser(head) {
    let cur = head;
    let prv = null;
    while (cur) {
        let next = cur.next;
        cur.next = prv;
        prv = cur;
        cur = next;
    }
}