function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  }
  return `![License badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  }
  return `http://opensource.org/licenses/${license}`;
}

function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `
## License

This project has the ${license} License. For more details, check the [LICENSE](${renderLicenseLink(license)}) file.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
