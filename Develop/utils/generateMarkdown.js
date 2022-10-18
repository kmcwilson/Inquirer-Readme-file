// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  `(https://img.shields.io/badge/license-${data.license}MIT-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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


  ## Description
${data.description}

  ## License
  ${section}
  ${badge}
  ${link}

  ##Questions
  [${data.github}](https://github.com/${data.github})

  Any further questions can be sent to:

  [${data.email}](mailto:${data.email})
  



`;

}

module.exports = generateMarkdown;
