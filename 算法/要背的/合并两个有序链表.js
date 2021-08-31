//创建一个新的nodelist 
// 返回 p.next
// 用一个东西存储它 next=p;
//大于就放在那里小于下一个 

// &&  结果也要推进 可以直接新建一个开始节点  当一个遍历完了 直接指向剩下的即可
var mergeTwoLists = function(l1, l2) {
    let p=new ListNode(0);
    let next=p;
    while(l1 && l2){
        if(l1.val<l2.val){
            next.next=l1;
            l1=l1.next;
        }else{
            next.next=l2;
            l2=l2.next;
        }
        //总是有错
        next=next.next;
    }
    next.next=l1 ? l1 :l2
    return p.next
 }
 
 