const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'What is the name of the team manager?',
            validate: mgrName => {
                if (mgrName) {
                    return true;
                } else {
                    console.log("Please enter manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerid',
            message: "What is the manager's employee ID?",
            validate: mgrId => {
                if (mgrId > 0) {
                    return true;
                } else {
                    console.log("Please enter manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manageremail',
            message: "What is the manager's e-mail address?",
            validate: mgrEmail => {
                if (mgrEmail) {
                    return true;
                } else {
                    console.log("Please enter manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manageroffice',
            message: "What is the manager's office number?",
            validate: mgrOffice => {
                if (mgrOffice) {
                    return true;
                } else {
                    console.log("Please enter manager's office number");
                    return false;
                }
            }
        },
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is the name of the engineer?',
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerid',
            message: "What is the engineer's employee ID?",
            validate: engId => {
                if (engId) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: "What is the engineer's e-mail address?",
            validate: engEmail => {
                if (engEmail) {
                    return true;
                } else {
                    console.log("Please enter the engineer's e-mail address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: "What is the engineer's GitHub username?",
            validate: engGithub => {
                if (engGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username");
                    return false;
                }
            }
        },
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is the name of the intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internid',
            message: "What is the intern's employee ID?",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internemail',
            message: "What is the intern's e-mail address?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the interns's e-mail address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internschool',
            message: "Where did the intern go to school?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            }
        },
    ]);
};