// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectName}

## Description

${data.projectDescription}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation

> ${data.dependencies}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}


## Tests

> ${data.tests}

## Contribute

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.



`;
}

module.exports = generateMarkdown;
