const licenseDict = {
  "Apache": ["", "", "", "", ""],
  "Apache 2.0": ["", "", "", "", ""],
  "GNU GPLv2": ["", "", "", "", ""],
  "GNU GPLv3": ["", "", "", "", ""],
  "GNU AGPLv3": ["", "", "", "", ""],
  "GNU LGPLv3": ["", "", "", "", "", ""],
  "MIT": ["MIT", "MIT", "https://opensource.org/licenses/", "MIT", "yellow"],
  "ISC": ["", "", "", "", ""],
  "Moxilla Public 2.0": ["", "", "", "", ""],
  "Boost Software 1.0": ["", "", "", "", ""],
  "Unilicense": ["", "", "", "", ""]
};

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license in licenseDict && licenseDict[license]) {
    const licList = licenseDict[license];
    return `[![License: ${licList[0]}](https://img.shields.io/badge/License-${licList[1]}-${licList[4]}.svg)](${licList[2]}${licenseDict[license][3]})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return badge;
}

module.exports = generateMarkdown;
