// promise 的状态值
const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

/*
* 基础版Promise，提供最基础的功能
*/

class BasePromise {
  constructor( executor ) {
    this.status = PENDING;              // 默认状态为PENDING
    this.value = undefined;             // 保存成功状态的值，默认为undefined
    this.reason = undefined;            // 保存失败状态的值
    this.onResolvedCallbacks = [];      // 保存成功的回调
    this.onRejectedCallbacks = [];      // 保存失败的回调

    // 成功时调用的方法
    const resolve = ( value ) => {
      // 状态为PENDING时才可以更新状态，防止executor中调用两次resolve/reject方法
      if ( this.status === PENDING ) {
        this.status = FULFILLED;
        this.value = value;

        // 依次执行对应的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    // 失败时调用的方法
    const reject = ( reason ) => {
      // 状态为PENDING时才可以更新状态，防止executor中调用两次resolve/reject方法
      if ( this.status === PENDING ) {
        this.status = REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      // 立即执行, 将resolve和reject函数传给使用者
      executor( resolve, reject);
    }
    catch ( error ) {
      // 发生异常是执行逻辑
      reject( error )
    }
  }

  // 包含一个then方法,并接收两个参数onFulfilled, onRejected
  then( onFulfilled, onRejected ) {
    if ( this.status === FULFILLED ) {
      onFulfilled(this.value);
    }
    else if ( this.status === REJECTED ){
      onRejected(this.reason);
    }
    else if ( this.status === PENDING ) {
      // 如果promise的状态是PENDING，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次执行对应的函数
      this.onResolvedCallbacks.push(() => { onFulfilled(this.value); });
      this.onRejectedCallbacks.push(() => { onRejected(this.reason); });
    }
  }
}

``

var a = new BasePromise((rsv, rjc) => {
    console.log('hi');
    rsv('1')
}).then((val) => {
    console.log(val)
})

// the