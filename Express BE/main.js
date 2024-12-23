//Note! Express documentation is still written in CommonJS instead of ESM and I am going to 
//follow the documentation. 


//requirements
//set up port
//set up express
//automagically destringify incoming JSON?
const express = require('express')
const app = express()
const port = 3000


//set up a test "hello world" kind of thing to make sure it's working.
app.get('/hello', (request, response) => {
    response.send('Howdy!')
})
//Handle GET request
//

//handle wrong URIs?
//handled by reverse proxy server, no need to do that here. 



//handle errors

//call the HTTP server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })