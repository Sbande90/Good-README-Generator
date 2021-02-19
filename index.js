let inquirer = require("inquirer");
let fs = require("fs");
let validator = require("./utils/validator");
let generator = require("./utils/generator");
let readmeContent = "";

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
        choices:["not selected","ISC","MIT","GPL","APACHE"],
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
    },

    {
        message: "what is your github username?",
        type: "input",
        name: "username",
        validate: function(response){
            return validator(response,"username");
         }
    },

    {
        message: "what is your email address?",
        type: "input",
        name: "email",
        validate: function(response){
            return validator(response,"email");
         }
    },

    {
        message: "how to reach me?",
        type: "input",
        name: "info",
        validate: function(response){
            return validator(response,"info");
         }
    }
]
inquirer.prompt(questions).then(function(response){
    console.log(response);
    let licenseBadge = generator.renderLicenseBadge(response);
    
    let licenseLink = generator.renderLicenseSection(response);
    let questionsLink = generator.renderQuestionsSection(response);
    let contributionLink = generator.renderContributionSection(response);
    let descriptionLink = generator.renderDescriptionSection(response);
    let installationLink = generator.renderInstallationSection(response);
    let usageLink = generator.renderUsageSection(response);
    let testLink = generator.renderTestSection(response);
    // let licenseLink = generator.renderLicenseLink(response);

    let titleSection = generator.titleMarkdown(response);
    let contributionSection = generator.generateMarkdown(response.contribution);
    let questionsSection = generator.generateMarkdown("questions");
    let decriptionSection = generator.generateMarkdown(response.decription);
    let installationSection = generator.generateMarkdown(response.installation);
    let usageSection = generator.generateMarkdown(response.usage);
    let testsSection = generator.generateMarkdown(response.tests);

    let profileLink = "[github profile](https://github.com/"+response.username+")";

    readmeContent = `${titleSection}\n ${decriptionSection}\n ${response.description}
    \n ## table of contents \n ${installationLink}\n ${usageLink}\n ${testLink}\n ${contributionLink}\n ${questionsLink}
    \n ${installationSection}\n ${response.installation}\n ${usageSection}\n ${response.usage}\n ${testsSection}\n ${response.tests} \n ## license\n ${response.license}
    \n ${licenseBadge}\n ${contributionSection}\n ${response.contribution}\n ${questionsSection}\n ${profileLink}\n ${response.email}\n ${response.info}`;


    fs.writeFile("readme1.md",readmeContent, function(){
        console.log("readme1 created")
    })

// console.log(readmeContent);
    // console.log(
    //     "licenseBadge: ",licenseBadge,
    //     "licenseLink: ", licenseLink,
    //     "contributionLink: ",contributionLink,
    //     "descriptionLink: ",descriptionLink,
    //     "installationLink: ",installationLink,
    //     "usageLink: ",usageLink,
    //     "testLink: ",testLink,
    //     "titleSection: ",titleSection,
    //     "contributionSection: ",contributionSection,
    //     "decriptionSection: ",decriptionSection,
    //     "installationSection: ",installationSection,
    //     " usageSection: ", usageSection,
    //     "testsSection: ",testsSection,
    //     "questionsLink: ",questionsLink,
    //     "questionsSection: ",questionsSection
    // )
})










// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions