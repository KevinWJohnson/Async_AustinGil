function asyncAdd(n, cb) {
    setTimeout(() => {
      n = n + 1
      cb(n)
    }, 500)
  }
  function asyncDouble(n, cb) {
    setTimeout(() => {
      n = n * 2
      cb(n)
    }, 500)
  }
  function asyncSquare(n, cb) {
    setTimeout(() => {
      n = n * n
      cb(n)
    }, 500)
  }
  
  function run() {
    let myNumber = 1
    console.log('start = ',myNumber)
  
    asyncAdd(myNumber, (result) => {
      myNumber = result
      console.log('plus one = ', myNumber)
  
      asyncDouble(myNumber, (result) => {
        myNumber = result
        console.log('doubled = ', myNumber)
  
        asyncSquare(myNumber, (result) => {
          myNumber = result
          console.log('squared = ', myNumber)
        })
      })
    })
  }
  
  module.exports = run