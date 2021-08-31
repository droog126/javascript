function Page() {
    this.a="2"
    return this.hosts;
}
Page.hosts = ['h1'];       //干扰
Page.prototype.hosts = ['h2'];
Page.prototype.hosts2 = ['h2'];

const p1 = new Page();
const p2 = Page();

console.log(p1)  // [h2]
console.log(p2,p2.hosts) // ''

console.log(Page.prototype) //can not read prototype 