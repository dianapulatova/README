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
 

  *[Questions]
  
  If you have any questions about the repo, feel free to contact me through gitHub (http://github.com/${data.questions})
  or directly at (<${data.question2}>)


`;
}

module.exports = generateMarkdown;
