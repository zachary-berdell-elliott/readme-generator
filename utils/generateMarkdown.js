// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection = `${data.license}

  Copyright ${data.githubUser}
  
  `

  if(data.license === "GNU"){

  }
  else if(data.license === "MIT") {

  }
  else if(data.license === "Apache"){

  }
  else if(data.license === "BSD"){

  }
  else{

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge}

  ## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation #installation
${data.installation}

## Usage #usage
${data.use}

## License #license
${renderLicenseSection}

## Contributing #contributing
${data.contribution}

## Tests #tests
${data.tests}

## Questions #questions

`;
}

module.exports = generateMarkdown;
