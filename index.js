const { timeStamp } = require("console");
// const { clear } = require("console");
// require fs
const fs = require("fs");
// const { string } = require("optimist");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// create const questions for the input - array of questions for user

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
  },
  // {
  //   type: "input",
  //   name: "tableOfContents",
  //   message: "Create table of contents.",
  // },
  {
    type: "input",
    name: "installation",
    message: "Instructions for installation.",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe Usage.",
  
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    default: "use arrow key",
    choices: [
      "MIT License",
      "Apache License",
      "GPL License",
      "Public Domain",
      "Mozilla Public License 2.0",
      "Creative Commons Zero v1.0 Universal",
      "The Unlicense",
      "Eclipse Public License 2.0",
    ],
  },
  {
    type: "input",
    name: "contributiong",
    message: "Contribution rules.",
    default: "Clone it, fork it but don't push any changes to master",
  },
  {
    type: "input",
    name: "tests",
    message: "Run the test here!",
    default: "npm test", 
  },
  {
    type: "input",
    name: "question1",
    message: "What's your gitHub username?",
   
  },
  {
    type: "input",
    name: "question2",
    message: "What is your email address?",
  },
  // {
  //   type: "input",
  //   name: "authors",
  //   message: "Who are the authors?",
  // },
];

// function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README.md");
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// function call to initialize program
init();
