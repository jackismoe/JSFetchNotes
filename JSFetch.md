# FETCH: 
## Dissect a basic GET fetch:
### first, fetch. second, convert to JSON. third, actually do something.
```javascript
fetch('https://api.github.com/orgs/nodejs') // 1
  .then((response) => {                     // 2
    return response.json()                  // 3
  })
  .then((jsonResponse) => {                 // 4
    console.log(jsonResponse)               // 5
  }) 
```
1. go to this URL and get this information. returns a promise.
2. then, take the promise that is returned, which i have chosen to call `response`, and pass it into the following function
3. turn the scope variable `response` into json, and return it
4. take the return value of the previous `then` statement, named `jsonResponse` and send it into the following function
5. log the response that has been json formatted

## Dissect a basic POST fetch:
### first, fetch. second, convert info to be saved with stringify. third, do something else (if needed). 
* Objective: Persist `newData` to the database
```javascript
let newData = "Hello"

// applies to post, put, patch, & delete
fetch("localhost:3000", {       // 1
  method: 'POST',               // 2
  body: JSON.stringify(newData) // 3
})
  .then((response) => {         // 4
    return response.json()      
  })
  .then((jsonResponse) => {     // 5
    // redirect to somewhere 
  })
```
1. find desired server to post information to.
2. declare what method to be used; in this case POST.
3. turn the body of the post request into a string.
4. then, take the `response` and convert it to json.
5. after the `response` has been converted to json, the desired action can be taken. either redirect, call new function etc...
