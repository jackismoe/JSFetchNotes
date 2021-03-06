console.log('Hi there!')

// what a promise looks like 
const getDataPromise = (number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof number === 'number' ? resolve(number * 2) : reject('Number should be a number')
  }, 2000)
})

console.log(getDataPromise(65))
  // => Promise {status: "pending"}
    // => result: 130
    // => status: 'resolved'
 
getDataPromise(2)
  .then((data) => {
    console.log(data)
  })
  // => 4
  // (Takes 2 seconds)

getDataPromise(2)
  .then((data) => {
    getDataPromise(data)
      .then((data2) => {
        console.log(data2)
      })
  })
  // => 8
  // => (Takes 4 seconds)

// fetch GET
fetch('https://api.github.com/orgs/nodejs')
  .then((response) => {
    return response.json()
  })
  .then((jsonResponse) => {
    console.log(jsonResponse)
  }) // see markDown for break down of this fetch

// fetch POST
let newData = "Hello"

fetch("https://localhost:3000", {
  method: 'POST',
  body: JSON.stringify(newData)
})
  .then((response) => {
    console.log(response)
  })