/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//快慢二分 链表排序 快慢分割 链表排序
var sortList = function(head) {
    if(!head || !head.next){return head}
    let slow=head,fast=head;
    let slowprv=null;
    while(fast && fast.next){
        slowprv=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    slowprv.next=null;
    const l=sortList(head);
    const r=sortList(slow);
    console.log(l,r)
    return merge(l,r);
};

