//Note! Express documentation is still written in CommonJS instead of ESM and I am going to 
//follow the documentation. 


//requirements
//set up port
//set up express
//automagically destringify incoming JSON? Don't need to for this? 
const express = require('express');
const app = express();
const port = 3000;

const generateNumbersIntoResponse = require('./generateNumbersIntoResponse');
const checkRequestForBogus = require('./checkRequestForBogus');

//set up a test "hello world" kind of thing to make sure it's working.
app.get('/hello', (request, response) => {
    response.status(200).send('Howdy!')
})


//Handle GET request
//
app.get('/:numberOfDice/:rangeOfDice', 
    checkRequestForBogus,
    generateNumbersIntoResponse,
    (request, response) => {
        response.status(200).send(response.body);
})

//handle wrong URIs?
//handled by reverse proxy server, no need to do that here. 



//handle errors

//call the HTTP server
app.listen(port, () => {
    console.log(`Dice app listening on port ${port}`)
  })