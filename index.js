// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// const { writeFile, copyFile } = require("./utils/manage_files");
const {questions}= require("./Develop/utils/questions");

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
//init();

const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser();

