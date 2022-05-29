(function(){

function divide(a,b){
  return new Promise((resolve,reject)=> {
    if(a === 0 ||b === 0){
      reject(new Error("Can not be devided by 0"))
    }
    resolve(a/b)
  })
}

  divide(10,0).then((res)=> {
    console.log(res)
  })
  
})();