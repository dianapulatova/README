// function to generate markdown for README

function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink() {}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  * [Installation](#installation)


  * [Usage](#usage)


  * License
  ${renderLicenseLink(data.license)}

  *[ Contributing](#contributing)
  

  *[Tests](#tests)
 

  *[GitHub](http://github.com/${data.questions})
  
  
  *[Email](<${data.question2}>)


  ## Authors
 

`;
}

module.exports = generateMarkdown;
