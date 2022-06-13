const questions = [
  {
    type: "input",
    name: "projectInput",
    message: "What is the name of your project? (Required)",
    validate: projectInput => {
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
      "GNU GPLv2",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "MIT",
      "ISC",
      "Moxilla Public 2.0",
      "Apache 2.0",
      "Boost Software 1.0",
      "Unilicense",
    ],
  },
  {
    type: "confirm",
    name: "confirmTests",
    message: "Are there any tests created for this project?",
    default: false,
  },
  {
    type: "number",
    name: "testCount",
    message: "How many tests do you need to list?",
    when: ({ confirmTests }) => confirmTests,
  },
  {
    type: "number",
    name: "installStepCount",
    message:
      "How many steps would you like to provide for installation? (Required)",
    validate: (installStepCount) => {
      if (
        installStepCount 
      ) {
        return true;
      } else {
        console.log(
          "Please enter a valid whole number. How many steps would you like to provide for installation?"
        );
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmContributions",
    message: "Are you accepting contributions to this project?",
    default: false,
  },
  {
    type: "number",
    name: "contributionCount",
    message: "How many ways are there to contribute to the project?",
    when: ({ confirmContributions }) => confirmContributions,
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
      if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      } else {
        console.log("Please enter a valid email address.");
        return false;
      }
    },
  }
];

module.exports = { questions };
