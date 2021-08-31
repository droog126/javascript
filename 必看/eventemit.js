class eventemiter{
    constructor() {
        this.events = {};
    }
    on(key,func) {
        var target = this.events[key];
        if (!target) {
            this.events[key] = [];
        }
        this.events[key].push(func);
    }
    emit(key,...args) {
        var target = this.events[key];
        if (target) {
            target.forEach((fnc) => {
                fnc.call(this, ...args);
            })
         }
    }
    once(key, func) {
        var event = function (...arg) {
            func(...arg);
            this.off(key,event);
        }
        this.on(key, event);
    }

    off(key, func) {
        var target = this.events[key];
        if (target) {
            this.events[key]=target.filter((val) => {
                return val != func;
            })
        }
        
    }
}
const emit = new eventemiter();
emit.on('cmd1', function (...arg) {
    console.log('event',arg)
})

function event2(...arg) {
    console.log('event2',arg)
}
emit.on('cmd1', event2);

emit.once('cmd1', function (...arg) {
    console.log('event3', arg);
})


emit.emit('cmd1', 'hello');



emit.off('cmd1', event2);
emit.emit('cmd1','word')