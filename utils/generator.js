// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if(!data.license){
        return "";
    }else{
        let mit = "![GitHub](https://img.shields.io/github/license/sbande90/Good-README-Generator?style=social)";
        if(data.license=="MIT"){
            return mit;
        }

        if(data.license=="ISC"){
            return "![GitHub](https://img.shields.io/github/license/sbande90/good-README-generator?label=ISC&style=social)";
        }

        if(data.license=="GPL"){
            return "![GitHub](https://img.shields.io/github/license/sbande90/good-README-generator?label=GPL&style=social)";
        }


        if(data.license=="APACHE"){
            return "![GitHub](https://img.shields.io/github/license/sbande90/good-README-generator?label=APACHE&style=social)";
        }

        if(data.license=="not selected"){
            return "";
        }
    }
}

// ISC","MIT","GPL","APACHE

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if(!data.license){
        return "";
    }else{
        return "[License](#license)"
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if(!data.license){
        return "";
    }else{
        return "[License](#license)"
    }
}

function renderDescriptionSection(data) {
    if(!data.description){
        return "";
    }else{
        return "[Description](#description)"
    }
}

function renderUsageSection(data) {
    if(!data.usage){
        return "";
    }else{
        return "[Usage](#usage)"
    }
}

function renderInstallationSection(data) {
    if(!data.installation){
        return "";
    }else{
        return "[Installation](#installation)"
    }
}

function renderTestSection(data) {
    if(!data.test){
        return "";
    }else{
        return "[Tests](#tests)"
    }
}

function renderContributionSection(data) {
    if(!data.contribution){
        return "";
    }else{
        return "[Contribution](#contribution)"
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    if(data){
        return `# ${data}`;
    }
    return "";
//   return `# ${data.title}`;
}

function titleMarkdown(data) {
    return `# ${data.title}`;
  }

module.exports = generateMarkdown;

module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;
module.exports = renderContributionSection;
module.exports = renderDescriptionSection;
module.exports = renderInstallationSection;
module.exports = renderTestSection;
module.exports = renderUsageSection;