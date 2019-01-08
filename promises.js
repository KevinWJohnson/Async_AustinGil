function promiseAdd(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        n = n + 1
        resolve(n)
      }, 500)
    })
  }
  function promiseDouble(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        n = n * 2
        resolve(n)
      }, 500)
    })
  }
  function promiseSquare(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        n = n * n
        resolve(n)
      }, 500)
    })
  }
  
  function run() {
    let myNumber = 2
    console.log('start = ',myNumber)
  
    promiseAdd(myNumber).then((result) => {
      myNumber = result
      console.log('plus one = ', myNumber)
    
      promiseDouble(myNumber).then((result) => {
        myNumber = result
        console.log('doubled = ', myNumber)
    
        promiseSquare(myNumber).then((result) => {
          myNumber = result
          console.log('squared = ', myNumber)
        })
      })
    })
  }
  
  module.exports = run