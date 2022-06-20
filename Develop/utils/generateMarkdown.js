const openURL = "https://opensource.org/licenses/";
const gnuURL = "https://www.gnu.org/licenses/";

/* source for license details = https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba */
const licenseDict = {
  "Apache 2.0": ["", "Apache_2.0", openURL, "Apache-2.0", "blue"],
  "GNU GPLv2": ["GPL v2", "GPL_v2", gnuURL + "old-licenses/", "gpl-2.0.en.html", "blue"],
  "GNU GPLv3": ["GPL v3", "GPLv3", gnuURL, "gpl-3.0", "blue"],
  "GNU AGPLv3": ["AGPL v3", "AGPL_v3", gnuURL, "agpl-3.0", "blue"],
  "GNU LGPLv3": ["LGPL v3", "LGPL_v3", gnuURL, "lgpl-3.0", "blue"],
  "MIT": ["MIT", "MIT", openURL, "MIT", "yellow"],
  "ISC": ["ISC", "ISC", openURL, "ISC", "blue"],
  "Mozilla Public 2.0": ["MPL 2.0", "MPL_2.0", openURL, "MPL-2.0", "brightgreen"],
  "Boost Software 1.0": ["", "Boost_1.0", "https://www.boost.org/", "LICENSE_1_0.txt", "lightblue"],
  "Unlicense": ["Unlicense", "Unlicense", "http://unlicense.org/", "", "blue"]
};

function renderLicenseBadge(license) {
  if (license in licenseDict && licenseDict[license]) {
    const licList = licenseDict[license];
    return `[![License: ${licList[0]}](https://img.shields.io/badge/License-${licList[1]}-${licList[4]}.svg)](${licList[2]}${licenseDict[license][3]})`;
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license in licenseDict && licenseDict[license]) {
    const licList = licenseDict[license];
    return `${licList[2]}${licenseDict[license][3]}`;
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if(license) {
  return `
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  const { projectInput, projectDescription, usageInput, license, github, email, contributions, tests } = data;
return `
# ${projectInput}

[![GitHub last commit](https://img.shields.io/github/last-commit/aMcCode/readme-generator?style=flat)]()

This command-line application uses the [Inquirer](https://www.npmjs.com/package/inquirer) NPM package to dynamically generate readme files.

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${projectDescription}
***

## Installation
UPDATE PENDING!
***

## Usage
${usageInput}
***

## License
${renderLicenseSection(license)}
***

## Contributing
${github}
${contributions}
UPDATE PENDING!
***

## Tests
${tests}
UPDATE PENDING!
***

## Questions
${email}
UPDATE PENDING!

`;
}

module.exports = generateMarkdown;
