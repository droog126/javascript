var data={
    name: 'tao',
    age: 10,
}

//遍历每一个属性 对面一个属性进行 defineProperty 监听set 如果改变 就更新视图 
//就是响应是数据

function track(obj, key) {
    console.log("get",obj,key)
}
function trigger(obj, key, new_val) {
    console.log('set', obj, key, "===>", new_val);
}

function observe(obj) {
    if (typeof obj !== "object") {
        return
    }
    Object.keys(obj).forEach(key => {
        var val = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                track(obj, key);
                return val;
            },
            set(new_val) {
                trigger(obj, val, new_val);
                val = new_val;
                
            }
        })
        if (typeof val == "object") {
            observe(val);
        }
    });
}
observe(data);

console.log(data.name);

data.age = 20;

console.log(data.age)





const handler = {
    get(target, key) {
        console.log('get', target, key);
        return Reflect.get(...arguments)
    },
    set(target, key, val) {
        console.log('set', target, key, val);
        return Reflect.set(...arguments);
    }
}

const obj2 = {
    
}
const proxy = new Proxy(obj2, handler);
proxy.name = 2;

function reactive(obj) {
    const handler = {
        get(target, key) {
            var val = Reflect.get(...arguments);
            if (typeof val == 'object') {
                return reactive(val)
            } else {
                return val;
            }
        },
        set(target, key, val) {
            return Reflect.set(...arguments);
        }

    }
    return new Proxy(obj, handler);
}