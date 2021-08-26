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

# ${data.title}
## ${data.github}



## Description 
${data.description}
Created using ${data.language}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#Contributing)
* [Testing](#test)


## Installation
${data.install}

## Usage 
${data.usage}

## License
This project is covered under ${data.license}
![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)

---

🏆 

## Contributing
${data.contribute}
## Tests
${data.test}


Find me on Github - ${data.github}
(https://github.com/${data.github})



`;
};

module.exports = generateMarkdown;
