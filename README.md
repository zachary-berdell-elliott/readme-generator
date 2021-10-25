function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

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
${renderLicenseSection(data.license)}

## Contributing #contributing
${data.contribution}

## Tests #tests
${data.tests}

## Questions #questions

`;
}