let arrObj = [
    { name: "xiaoming" },
    { age: 18 },
  ]
  var resultObject = arrObj.reduce(function (result, currentObject) {
    for (var key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        result[key] = currentObject[key];
      }
    }
    return result;
  }, {});
  console.log(resultObject) // {name: "xiaoming", age: 18}

  const result={}
  arrObj.map(one =>{
    for(let key in one){
      if(!result.hasOwnProperty(key)){
        result[key]=one[key];
      }
    }
  })
  console.log(result);

  