// function to generate markdown for README


function renderLicenseBadge(license) {
  var chosenLicense = "";
for (let i = 0; i < license.length; i++ ) {
   if (license[i] === " ") {
      chosenLicense += "%20";
   }
   else {
      chosenLicense += license[i]
   }
}
 
  return `![GitHub license](https://img.shields.io/badge/license-${chosenLicense}-blue.svg)`;
}

function renderLicenseLink() {}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)


  * [Usage](#usage)


  * [License](#license)
 

  * [Contributing](#contributing)
   ${data.contributing}
  

  * [Tests](#tests)
    ${data.tests}
 

  ## Installation
    ${data.installation}
    
  ## Questions
  
  // If you have any questions about the repo, feel free to contact me through gitHub <${data.question1}>
  or directly at <${data.question2}>


`;
}

module.exports = generateMarkdown;

// ## Title
// ${data.title}

// ## Table of Contents
// ${data.tableOfContents}

// * License
// ${renderLicenseLink(data.license)}
