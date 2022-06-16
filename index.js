// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// const { writeFile, copyFile } = require("./utils/manage_files");
const { initial_questions, contribution_questions, tests_questions, mock_data} = require("./Develop/utils/questions.js");

//objects we need for processing
let initial_answers = [];
let contributions = [];
let tests = [];

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

const promptInitQuestions = () => {
  return inquirer.prompt(initial_questions);
};

const promptContributions = () => {
  return inquirer.prompt(contribution_questions)
    .then((contribution_answer) => {
    contributions.push(contribution_answer.contribution);
    if(contribution_answer.moreContributions) {
      return promptContributions();
    } else {
      return contributions;
    }
  });
};

const promptTests = () => {
  return inquirer.prompt(tests_questions)
    .then((test_answer) => {
    tests.push(test_answer.test);
    if (test_answer.moreTests) {
      return promptTests();
    } else {
      return contributions;
    }
  });
};

// Function call to initialize app
promptInitQuestions()
  .then((answers) => {
    initial_answers = answers;
  })
  .then(promptContributions)
  .then(promptTests)
  .then(() => {
    console.log(initial_answers);
    console.log(contributions);
    console.log(tests);
  });

//console.log(JSON.stringify(answers.contributionCount, null, "  "));
