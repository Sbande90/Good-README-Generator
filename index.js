let inquirer = require("inquirer");
let fs = require("fs");

let questions = [
    {
        question: "what is your title?",
        type: "input",
        name: "title"
    },
    {
        question: "what is the description?",
        type: "input",
        name: "description",
    }
]
inquirer.prompt(questions).then(function(response){
    console.log(response);
})









// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions