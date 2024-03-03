// TODO: Create a function that returns a license badge based on which license is passed in
// const license = data.license;
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![Github License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return ` - [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
    This project is using ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

${renderLicenseBadge(data.license)}

## Description

${data.projectDescription}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation

> ${data.dependencies}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}


## Tests

> ${data.tests}

## Contribute

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at <${
    data.email
  }>. You can find more of my work at [${data.username}](https://github.com/${
    data.username
  }).



`;
}

module.exports = generateMarkdown;
