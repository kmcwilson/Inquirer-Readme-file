// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='None') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license.trim()}-green.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return'';

  } else {
    return '- [License](#license)'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'None'){
    return '';

  } else {
    return `  ## License
    This project is licensed under the ${license} license.`
  }
};

// TODO: Create a function to generate markdown for README
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
