function curry(fn) {
                                                                                                                                                                                                                                                                                                                                                                                                
    function curry_control(...args) {

        if (args.length == fn.length) {
            return fn(...args);
        } else {
            return (...arg) => {
                return curry_control(...args, ...arg);
            };
        }

    }

    return curry_control;

}

function add(a, b, c) {
    console.log(a+b+c)
    return a + b + c;
}

var control = curry(add);
control(1)(2)(3)