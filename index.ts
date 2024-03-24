#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number - Done

// 2) User input for guessing numbers - Done

// 3) Compare user input with computer generated number & show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
} else {
    console.log("You guessed wrong number.");
}