const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "desciption",
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
    name: "test",
    message: "Enter your project testing instructions",
  },
  {
    type: "list",
    name: "faq",
    choices: ["joe", "blow"],
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


}

// Function call to initialize app
init();
