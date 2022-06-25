const initial_questions = [
  {
    type: "input",
    name: "projectInput",
    message: "What is the name of your project? (Required)",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please provide a name for this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please describe your project. (Required)",
    validate: (projDescriptInput) => {
      if (projDescriptInput) {
        return true;
      } else {
        console.log("Please briefly describe your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usageInput",
    message: "Explain how to use the app. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Explain how to use the app.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license did you use for this project?",
    choices: [
      "Apache",
      "Apache 2.0",
      "GNU GPLv2",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "MIT",
      "ISC",
      "Mozilla Public 2.0",
      "Boost Software 1.0",
      "Unlicense"
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address. (Required)",
    validate: (email) => {
      if (
        email &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        return true;
      } else {
        console.log("Please enter a valid email address.");
        return false;
      }
    },
  },
];

const installation_questions = [
  {
    type: "input",
    name: "installation_method",
    message: "Provide an installation step. (at least one required)",
    validate: (installation_method) => {
      if (installation_method) {
        return true;
      } else {
        console.log("Provide at least one installation step.");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "moreInstallSteps",
    message: "Would you like to provide more installation steps?",
    default: false,
  }
];

const contribution_questions = [
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution method. Type 'none' if none.",
    default: "none",
  },
  {
    type: "confirm",
    name: "moreContributions",
    message: "Would you like to enter more contributions?",
    default: false,
    when: (answers) => answers.contribution != "none"
  }
];

const tests_questions = [
  {
    type: "input",
    name: "test",
    message:
      "Enter the name of a test used for this project. Type 'none' if none.",
    default: "none",
  },
  {
    type: "confirm",
    name: "moreTests",
    message: "Would you like to enter more tests?",
    default: false,
    when: (answers) => answers.test != "none"
  },
];

module.exports = {
    initial_questions,
    installation_questions,
    contribution_questions,
    tests_questions,
};
