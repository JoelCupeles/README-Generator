function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `https://opensource.org/licenses/${license}`;
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `
## License

This project is licensed under the ${license} License. For more information, see the [LICENSE](${renderLicenseLink(license)}) file.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please reach out to me via [GitHub](https://github.com/${data.github}) or [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
