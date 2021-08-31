const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')

function get(obj,...path){
    const r=[]
    for(let i in path){
        let item=path[i];
        item=item.replace(/\[/g,'.').replace(/\]/g,'').split('.');
        for(let one of item){
            r[i] ? r[i]=r[i][one] : r[i]=obj[one]
        }
    }
    console.log(r)
}