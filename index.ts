#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select One of The Operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);


if(answer.operator === "Addition"){
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
    }else if(answer.operator === "Substraction"){
        console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
        
    }else if(answer.operator === "Multiplication"){
        console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
    }else if(answer.operator === "Division"){
        console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
    }else{console.log("You choose wrong Operator");
    }