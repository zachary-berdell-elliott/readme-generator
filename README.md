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
If you have any questions, please contact me at ${data.email} to receive an answer to your question. If you would like to view other projects by me then [visit my profile here.](https://github.com/${data.githubUser})
`;
}