import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const final2014 = fifaData.filter(function(item){
    return item.Stage == "Final" && item.Year === 2014
})
console.log(`Task1: `, final2014[0]["Home Team Name"]);
console.log(`Task1: `, final2014[0]["Away Team Name"]);
console.log(`Task1: `, final2014[0]["Home Team Goals"]);
console.log(`Task1: `, final2014[0]["Away Team Goals"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

//The Proper Answer For task 4 is:
// function getFinals(data) {
//     const finals = data.filter(function(item){
//         return item.Stage === "Final"
//     })
//     return finals;
// };
// console.log(`Task2: `, getFinals(fifaData));
//But better used in following tasks as:
function getFinals() {
    const finals = fifaData.filter(function(item){
        return item.Stage === "Final"
    })
    return finals;
};
console.log(`Task2: `, getFinals());



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array) {
    const years = array.map(function(item){
        return item.Year;
    })
    return years;
};

console.log(`Task3: `, getYears(getFinals()));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(array) {
    let winners = [];
    array.forEach(function(item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners = winners.concat(item["Home Team Name"])
        }
        else if (item["Away Team Goals"] > item["Home Team Goals"]) {
            winners = winners.concat(item["Away Team Name"])
        }
        else {
            winners = winners.concat(item["Win conditions"])
        }
    })
    return winners;
};

console.log(`Task5: `, getWinners(getFinals()));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2, cb3) {
    //not a HIGHER ORDER FUNCTION YET??
    let winnersByYears = [];
    for (let i = 0 ; i < cb1.length ; i++) {
        winnersByYears.push(`In ${cb2[i]}, ${cb1[i]} won the world cup!`)
    }
    console.log(`Task5:`, winnersByYears)
    return winnersByYears;
};

getWinnersByYear( getWinners(getFinals()), getYears(getFinals()) );

// function getWinnersByYear(cb1, cb2, cb3) {
//     //not a HIGHER ORDER FUNCTION YET!!
//     let winnersByYears = [];
//     for (let i = 0 ; i < cb1.length ; i++) {
//         winnersByYears.push(`In ${cb2(cb3)[i]}, ${cb1(cb3)[i]} won the world cup!`)
//     }
//     console.log(`Task6:`, winnersByYears)
//     return winnersByYears;
// };

// getWinnersByYear( getWinners, getYears, getFinals());

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const aveHomeGoals = data.reduce(function(accumulator, item){
        return (accumulator + item["Home Team Goals"])
    }, 0) / data.length;
    const aveAwayGoals = data.reduce(function(accumulator, item){
        return (accumulator + item["Away Team Goals"])
    }, 0) / data.length;
    return `Average Home Team Goals: ${aveHomeGoals}, Average Away Team Goals: ${aveAwayGoals}`
}

console.log(`Task7: `, getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(data, teamInitials) {
//     const countryHomeRecord = data.filter(function(item){
//         return item["Home Team Initials"] === teamInitials;
//     })
//     console.log(countryHomeRecord)

// //     const countryWins = countryRecord.reduce()
// // };

// console.log(getCountryWins(fifaData, "ARG"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
