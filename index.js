const inquirer = require('inquirer');
const generatePage = require('./page-template.js');
const writeFile = require('./utils/generateMarkdown.js');

// prompt of questions for user
const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter your Project Title (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your Project Description (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationSteps => {
                if (installationSteps) {
                    return true;
                } else {
                    console.log('Please enter your installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please enter your usage information!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select which license you want to use (Required)',
            choices: ['MIT', 'GPLv3'],
            validate: license => {
                if (license) {
                    return true;
                }
                else {
                    console.log('Please pick a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines on how other developers can contribute to your application.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please write tests and for your application and explain how to run them',
        },
    ]);
};

promptProject()
    .then(projectData => {
        return generatePage(projectData);
    })
    .then(readmePage => {
        return writeFile(readmePage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });