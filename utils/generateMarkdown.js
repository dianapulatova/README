// function to generate markdown for README

function renderLicenseBadge(license) {
  // return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  return`![GitHub license](https://img.shields.io/badge/license-${license})`;
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
 

  *[Contributing](#contributing)
  

  *[Tests](#tests)
 

  ## Questions
  
  // If you have any questions about the repo, feel free to contact me through gitHub <${data.questions}>
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
