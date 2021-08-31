class Single_Mode{
    constructor() {
        this.table={}
        this.construc = {};
    }
    register(name,obj) {
        if (obj.constructor == Function) {
            this.construc[name] = obj;
        }
        else if (obj.constructor == Object) {
            if (!this.table[name]) {
                this.table[name] = obj;
            }
        }
    }
    get(name) {
        if (!this.table[name]) {
            this.table[name] = new this.construc[name]();
        }
        return this.table[name];
    }
}
const single_control = new Single_Mode();
single_control.register('log', function () {
    return {
        say() {
            console.log('hello world')
        }
    }
})

var log = single_control.get('log');
log.say();
