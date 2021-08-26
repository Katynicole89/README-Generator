// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions =
      [
  
     {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project. (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'How will others install your project? (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can others use this project? (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage details!');
            return false;
          }
        }
      },
      {
      type: 'input',
      name: 'contribute',
      message: 'List any contributing persons or sources',
    },
    {
      type: 'input',
      name: 'test',
      message: 'List any testing you have done for the project',
    },
      {
        type: 'checkbox',
        name: 'language',
        message: 'What did you use to create this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project. ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
      }
    ];


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
      err ? console.error(err):
      console.log('Sucess! Check Dist folder for README file!')
  );
}



// TODO: Create a function to initialize app
const init = async () => {
  try {
      const data = await inquirer.prompt(questions);
      writeToFile('./Dist/README.md', generateMarkdown(data));
  } catch (err) {
      console.log(err);
  }
}


// Function call to initialize app
init()