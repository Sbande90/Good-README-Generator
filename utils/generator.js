// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let generator = {
 renderLicenseBadge: function(data) {
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
},

// ISC","MIT","GPL","APACHE

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
 renderLicenseLink: function(data) {
    if(!data.license){
        return "";
    }else{
        return "[License](#license)"
    }
},

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 renderLicenseSection: function(data) {
    if(!data.license){
        return "";
    }else{
        return "[License](#license)"
    }
},

 renderDescriptionSection: function(data) {
    if(!data.description){
        return "";
    }else{
        return "[Description](#description)"
    }
},

 renderUsageSection: function(data) {
    if(!data.usage){
        return "";
    }else{
        return "[Usage](#usage)"
    }
},

 renderInstallationSection: function(data) {
    if(!data.installation){
        return "";
    }else{
        return "[Installation](#installation)"
    }
},

 renderTestSection: function(data) {
    if(!data.test){
        return "";
    }else{
        return "[Tests](#tests)"
    }
},

 renderContributionSection: function(data) {
    if(!data.contribution){
        return "";
    }else{
        return "[Contribution](#contribution)"
    }
},

renderQuestionsSection: function(data) {
    if(!data.email || !data.username || !data.info){
        return "";
    }else{
        return "[Questions](#questions)"
    }
},

// TODO: Create a function to generate markdown for README
 generateMarkdown: function(data) {
    if(data){
        return `## ${data}`;
    }
    return "";
//   return `# ${data.title}`;
},

 titleMarkdown: function(data) {
    return `# ${data.title}`;
  }
}
module.exports = generator;

/*module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;
module.exports = renderContributionSection;
module.exports = renderDescriptionSection;
module.exports = renderInstallationSection;
module.exports = renderTestSection;
module.exports = renderUsageSection;*/