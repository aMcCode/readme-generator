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
      "Moxilla Public 2.0",
      "Boost Software 1.0",
      "Unilicense"
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

const contribution_questions = [
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution method. Type 'none' if none.",
  },
  {
    type: "confirm",
    name: "moreContributions",
    message: "Would you like to enter more contributions?",
    default: false,
  }
];

const tests_questions = [
  {
    type: "input",
    name: "test",
    message:
      "Enter the name of a test used for this project. Type 'none' if none.",
  },
  {
    type: "confirm",
    name: "moreTests",
    message: "Would you like to enter more tsts?",
    default: false,
  },
];

const mock_data =  {
    projectInput: "Test Project",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    usageInput:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    license: "MIT",
    github: "amccode",
    email: "mcneila1997@gmail.com",
    contributions: [ "contribution 1", "contribution 2", "contribution 3" ],
    tests: [ "none" ]
  };

module.exports = {
  initial_questions,
  contribution_questions,
  tests_questions,
  mock_data,
};
