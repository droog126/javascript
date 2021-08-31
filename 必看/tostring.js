function tostring(obj,str=[]) {
    Object.keys(obj).forEach((key) => {
        var val = obj[key];
        if (typeof val == 'object') {
            tostring(val,[...str,key]);
        } else { 
            console.log([...str,key].join('.'), '=', val);
        }
    })
}

var obj = {
    foo : 'test',
    bar : {
        id : 123,
        name : 'tx'
    },
    arr: [1,2],
    items: [{
        id: 456
    }]
};

// tostring(obj);

function deepclone(obj) {
    var target;
    if (obj.constructor == Object) {
        target = {};
    }
    else if (obj.constructor == Array) {
        target = [];
    } else {
        return;
    }
    Object.keys(obj).forEach((key) => {
        var val = obj[key];
        if (val.constructor == Object) {
            target[key] = deepclone(val);
        }
        else if (val.constructor == Array) {
            target[key] = deepclone(val);
        }
        else if (val.constructor == Function) {
            target[key] = new Function(`return ${val.tostring()}`).call(this);
        }
        else {
            target[key] = val;
        }
    })
    return target;
}

console.log(deepclone(obj));
