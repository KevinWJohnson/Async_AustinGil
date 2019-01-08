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
  
  async function run(myNumber = 3) {
    console.log('start = ', myNumber)
  
    myNumber = await promiseAdd(myNumber)
    console.log('plus one = ', myNumber)
  
    myNumber = await promiseDouble(myNumber)
    console.log('doubled = ', myNumber)
    
    myNumber = await promiseSquare(myNumber)
    console.log('squared = ', myNumber)
  }
  
  module.exports = run