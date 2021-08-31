const uploadFile = (url, params) => {
    return Promise.race([
      uploadFilePromise(url, params),
      uploadFileTimeout(3000)
    ])
  }
  function uploadFilePromise(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {'Content-Type': 'multipart/form-data'}, // 以formData形式上传文件
        withCredentials: true
      }).then(res => {
        if(res.status===200 && res.data.code===0) {
          resolve(res.data.result)
        }else {
          reject(res.data)
        }
      })
    })
  }
  function uploadFileTimeout(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({timeoutMsg: '上传超时'})
      }, time)
    })
  }
//promise 里面放个settimout
