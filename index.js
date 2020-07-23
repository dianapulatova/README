const { clear } = require("console");
// require fs
const fs = require("fs");
const { string } = require("optimist");
const inquirer = require("inquirer");

// create const questions for the input - array of questions for user 

const questions = [
    {
        type: "input",
        name: "badge",
        message: "Code repo badge"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description."
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Create table of contents."
    },
    {
        type: "input",
        name: "installation",
        message: "Instructions for installation."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe Usage."
    },
    // {
    //     type: "checkbox",
    //     name: "license",
    //     message: "Choose a license."
    //     choices: [
    //         "MIT License",
    //         "Apache License",
    //         "GPL License",
    //         "Public Domain",
    //         "Mozilla Public License 2.0",
    //         "Creative Commons Zero v1.0 Universal",
    //         "The Unlicense",
    //         "Eclipse Public License 2.0"
    //     ]},
    {
        type: "input",
        name: "contributiong",
        message: "Contribution rules."
    },
    {
        type: "input",
        name: "tests",
        message: "Run the test here!"
    },
    {
        type: "input",
        name: "questions",
        message: "Write your questions."
    },
    {
        type: "https://github.com/",
        name: "GitHub username",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "authors",
        message: "Who are the authors?"
    }
]
//The console.clear() method clears the console if the environment allows it.
console.clear();

inquirer.prompt(questions).then(response => {
    fs.appendFileSync("README.md", ("#" + response.badge) + '\n', function(err) {
        if (err) {
            return console.log(err);    
        }
        console.log("Success!");   
    });
    fs.appendFileSync("README.md", ("#" + response.tile) + '\n', function(err) {
        if (err) {
            return console.log(err);    
        }
        console.log("Success!");   
    });
    fs.appendFileSync("README.md", ("Description" + '\n' + response.description) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Table of Contents" + '\n' + ' - ' + response.tableOfContents) + 
     '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Installation Instructions" + '\n' + response.installation) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Usage" + '\n' + response.usage) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("License" + '\n' + response.license) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Contributing" + '\n' + response.contributing) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("How to Run Tests" + '\n' + response.tests) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Questions" + '\n' + response.questions) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("GitHub Username" + '\n' + "![aly test]" + response.gitHubUsername) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    });
    fs.appendFileSync("README.md", ("Author" + '\n' + response.authors) + '\n', function(err) {
        if (err) {
            return console.log(err);   
        }
        console.log("Success!");
        
    })


})
