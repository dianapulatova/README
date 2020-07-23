// function to generate markdown for README
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
 

  *[GitHub](http://github.com)
  
  
  * [Email](#questions)
 

  ## Authors
 

`;
}

module.exports = generateMarkdown;
