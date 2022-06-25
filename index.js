const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile, copyFile } = require("./utils/manage_files");
const { initial_questions, installation_questions, contribution_questions, tests_questions, mock_data} = require("./utils/questions.js");

const DEBUG = false;

const promptInitQuestions = () => {
  return inquirer.prompt(initial_questions);
};

const promptInstallSteps = readme_data => {
  if(!readme_data.installSteps){
    readme_data.installSteps = [];
  }
  return inquirer.prompt(installation_questions)
    .then(install_answer => {
    readme_data.installSteps.push(install_answer.installation_method);
    if(/*install_answer.installation_method && install_answer.installation_method.toLowerCase != "none" && */install_answer.moreInstallSteps) {
      return promptInstallSteps(readme_data);
    } else {
      return readme_data;
    }
  });
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

// Function call to initialize app
function init() {
  promptInitQuestions()
    .then(promptInstallSteps)
    .then(promptContributions)
    .then(promptTests)
    .then(readme_data => { return generateMarkdown(readme_data); })
    .then(mockupTxt => { return writeFile(mockupTxt); })
    .then(copyFile)
    .catch(err => {
      console.log(err);
    });
}


//TODO:  DELETE DEBUG, copy to dist function, testInit and MockData on final deploy. 

/* TEST Function call to initialize app
    so it will use mockdata which lives in questios.js
*/

async function testInit() {
  const mockTxt = generateMarkdown(mock_data)
  await writeFile(mockTxt);
  copyFile();
};

if(!DEBUG)
  init();
else
  testInit();
