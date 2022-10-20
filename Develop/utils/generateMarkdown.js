//This function is a conditional statement that states if the license question is answered as None then the badge will be empty, if another answer is placed then the license chosen will be placed into the img URL
function renderLicenseBadge(license) {
  if (license ==='None') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license.trim()}-green.svg)`
  }
};

//This function is a conditional statement that states if the license question is answered as None then there will be no link to the license section.
//If there is a license entered then a link will appear in the table of contents. 
function renderLicenseLink(license) {
  if (license === 'None') {
    return'';

  } else {
    return '- [License](#license)'
  }
};

//This function is a conditional statement that states if the license question is answered as None then there will be no license section with text and information.
//If there is a license entered then the text and license name will appear in the README.
function renderLicenseSection(license) { 
  if (license === 'None'){
    return '';

  } else {
    return `  ## License
    This project is licensed under the ${license} license.`
  }
};

// This function uses the data from the index.js user information and calls upon each license function then uses the user information to write the README.md file.
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);
  return `# ${data.title}

${badge}

  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
   ${link}


  ## Description
${data.description}

## Installation

To install necessary dependencies, run the following command:

${data.dependencies}

## Usage
${data.usage}

${section}

  ## Contributing
  ${data.contribution}

  ## Tests

  To run test, run the following command:

  ${data.tests}

  ## Questions
  
  If you have any questions about the repo, contact me directly [${data.email}](mailto:${data.email}). You can view my work at [${data.github}](https://github.com/${data.github}).
  
`;

}

module.exports = generateMarkdown;
