const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { liscenseBadges } = require("./utils/liscenseTypes");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter your project installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter your project usage information",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter your project contributing guidlines",
  },
  {
    type: "input",
    name: "testing",
    message: "Enter your project testing instructions",
  },
  {
    type: "list",
    name: "liscense",
    choices: ["Apache License 2.0", "MIT License", "Mozilla Public License", "The Unlicense", "No Liscense" ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) return false
    });
    return true;
}

// TODO: Create a function to initialize app
async function init() {
  const prompt = inquirer.createPromptModule();
  let answers;
  try {
    answers = await prompt(questions);
  } catch (err) {
    return console.log(err);
  }

  const mdText = generateMarkdown(answers);
  writeToFile("readme.md", mdText);

}

// Function call to initialize app
init();
