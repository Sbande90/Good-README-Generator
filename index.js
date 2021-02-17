let inquirer = require("inquirer");
let fs = require("fs");
let validator = require("./utils/validator");

let questions = [
    {
        message: "what is your title?",
        type: "input",
        name: "title",
        validate: function(response){
           return validator(response,"title");
        }
    },
    {
        message: "what is the description?",
        type: "input",
        name: "description",
        validate: function(response){
            return validator(response,"description");
         }
    },

    {
        message: "what are the installation instructions?",
        type: "input",
        name: "installation",
        validate: function(response){
            return validator(response,"installation");
         }
    },

    {
        message: "how to use",
        type: "input",
        name: "usage",
        validate: function(response){
            return validator(response,"usage");
         }
    },

    {
        message: "license",
        type: "list",
        choices:["ISC","MIT","not selected"],
        name: "license",
        validate: function(response){
            return validator(response,"license");
         }
    },

    {
        message: "what is the contribution guideline?",
        type: "input",
        name: "contribution",
        validate: function(response){
            return validator(response,"contribution");
         }
    },

    {
        message: "what is the testing process?",
        type: "input",
        name: "tests",
        validate: function(response){
            return validator(response,"tests");
         }
    }
]
inquirer.prompt(questions).then(function(response){
    console.log(response);
})









// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions