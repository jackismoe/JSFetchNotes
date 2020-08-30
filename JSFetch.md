fetch('https://api.github.com/orgs/nodejs') <!-- go to this URL -->
  .then((response) => { <!-- then, take what is returned, which i have chosen to be called `response`, and pass it into the following function -->
    return response.json()  <!-- turn the scope variable into json, and return it -->
    })
  .then((jsonResponse) => { <!-- take the return value of the previous `then` statement, named `jsonResponse` and send it into the following function -->
    console.log(jsonResponse) <!-- log the response that has been json formatted -->
    })