// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

function LazyMan(name) {

    var events = [];
    setTimeout(() => {
        console.log(events);
        handle();
    })
    function handle() {
        while (events.length) {
            var target = events.shift();
            if (typeof target == "string") {
                console.log(target);
            }
            else if (typeof target == "number") {
                setTimeout(() => {
                    handle();
                },target)
                break;
            }
        }
    }
    return {
        name,
        sleep(time) {
            events.push(time);
            return this;
        },

        eat(food) {
            events.push(food);
            return this;
        },

    }
}
LazyMan("hank").eat("dinner").sleep(10000).eat("supper");

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推。

// const lazyman = function (name) {
//     console.log(name)
//     return {
//     executeChain: Promise.resolve(),
//     eat,
//     sleep
//     }
// };
 
// const eat = function (food) {
//     this.executeChain = this.executeChain.then(() => new Promise(resolve => {
//         console.log(food);
//         resolve();
//     }))
//     return this;
// }

// const sleep = function (time) {
//     this.executeChain = this.executeChain.then(() => new Promise(resolve => {
//         setTimeout(() => {
//         resolve();
//         console.log(time);
//         }, time)
//     }))
//     return this;
// }

// lazyman('Jack').eat('lunch').sleep(1).eat('dinner').sleep(2)
