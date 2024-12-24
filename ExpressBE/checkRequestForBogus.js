/* /dice/:numberOfDice/:rangeOfDice
Make sure...
params exist
params are numbers
params aren't 0

If they are, return an error. 

*/

checkRequestForBogus = (request, response, next) => {
    //setup stuff
    const numberOfDice = Number(request.params.numberOfDice);
    const rangeOfDice = Number(request.params.rangeOfDice);

    //did they ask for positive non zero numbers?
    if(numberOfDice < 1 || rangeOfDice < 1){
        console.log("We were sent: ", numberOfDice, rangeOfDice);
        response.status(400).send("Ask for positive numbers...");
    }


    //did they properly as for both number of dice and range of dice? 
    //This doesn't work, doesn't enter the express route if they don't. 
    //But it does catch if they sent us text. Keeping it. 
    if(!numberOfDice || !rangeOfDice){
        console.log("We were sent: ", numberOfDice, rangeOfDice);
        response.status(400).send("You're missing a number. Did you send text?");
    }



    //go to next middleware. 
    return next();
}

module.exports = checkRequestForBogus;