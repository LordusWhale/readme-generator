const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Inquirer questions
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
    name: "licence",
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

// Writing to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) return console.log("An error occured")
    });
}
// Start function
async function init() {
  const prompt = inquirer.createPromptModule();
  let answers;
  try {
    answers = await prompt(questions);
  } catch (err) {
    return console.log("An error occured");
  }

  const mdText = generateMarkdown(answers);
  writeToFile("markdownGeneration.md", mdText);

}

init();
