// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project_name',
    },
    {
        type: 'input',
        message: "please write a short description of your project",
        name: 'description',
    },
    {
        type: 'list',
        message: "What kind of licese should your project have?",
        choices: ['MIT', 'Apache', 'Boost', 'BSD'],
        name: 'license',
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'installation_command',
    },
    {
        type: 'input',
        message: "What command should be run to run test?",
        name: 'test_command',
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "what does the user need to know about contributing to the repo?",
        name: 'contributing',
    },
    ];

    module.exports = questions;


