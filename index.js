// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// const { writeFile, copyFile } = require("./utils/manage_files");
const { initial_questions, contribution_questions, tests_questions, mock_data} = require("./Develop/utils/questions.js");

const promptInitQuestions = () => {
  return inquirer.prompt(initial_questions);
};

const promptContributions = readme_data => {
  if(!readme_data.contributions){
    readme_data.contributions = [];
  }
  return inquirer.prompt(contribution_questions)
    .then(contribution_answer => {
    readme_data.contributions.push(contribution_answer.contribution);
    if(contribution_answer.moreContributions) {
      return promptContributions(readme_data);
    } else {
      return readme_data;
    }
  });
};

const promptTests = readme_data => {
  if(!readme_data.tests)
    readme_data.tests = [];
  return inquirer.prompt(tests_questions)
    .then((test_answer) => {
    readme_data.tests.push(test_answer.test);
    if (test_answer.moreTests) {
      return promptTests(readme_data);
    } else {
      return readme_data;
    }
  });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
function init() {
  promptInitQuestions()
    .then(promptContributions)
    .then(promptTests)
    .then (readme_data => {
      console.log(readme_data);
    });
}

init();
