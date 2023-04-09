// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your application:',
        choices: [
          'MIT',
          'Apache 2.0',
          'GPL 3.0',
          'BSD 3-Clause',
          'None',
        ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file has been generated successfully!');
      });
      
}

// TODO: Create a function to initialize app
async function init() {
    try {
      const userInput = await inquirer.prompt(questions);
      const markdown = generateMarkdown(userInput);
      writeToFile('README.md', markdown);
    } catch (err) {
      console.log(err);
    }
  }
// Function call to initialize app
init();
