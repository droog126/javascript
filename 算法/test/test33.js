
const obj = {
    selector: { to: { toutiao: 'FE coder' } },
    target: [1, 2, { name: 'byted' }]
};
/* 运行代码 */
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
function get(obj,...args){
    let r=[];
    for(let i=0;i<args.length;i++){
        let item=args[i];
        item=item.replace(/\[/g,'.').replace(/\]/g,'')
        item=item.split('.');
        let cur_r;
        for(let key of item){
            if(cur_r){
                cur_r=cur_r[key]
            }else{
                cur_r=obj[key];
            }
        }
        r.push(cur_r);
    }
    console.log(r);
}