//get the url parameters and generate numberOfDice random numbers of range 1-rangeOfDice.





generateNumbersIntoResponse = (request, response, next) => {
    //I want a function for the dice roll.
    function diceRoll (range){
        return Math.floor(Math.random() * range) + 1;
    }
    
    
    
    //loop and generate numbers, push to an array. 
    //setup stuff
    let numbers = [];
    const numberOfDice = request.params.numberOfDice;
    const rangeOfDice = request.params.rangeOfDice;

    //loop and push generated numbers to an array
    for (let counter = 0; counter < numberOfDice; counter++){
        numbers.push(diceRoll(rangeOfDice));
    }

    //stick that array full of numbers into the response body
    response.body = numbers;

    //go to next middleware. 
    return next();
}

module.exports = generateNumbersIntoResponse;