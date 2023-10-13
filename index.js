// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');



// TODO: Create a function to write README file
function readmeString(response) {
    return `# README GENERATOR
  
  # Description
  ${response.description}
  
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  
  # Installation
  \`\`\`bash
  ${response.installation_command}
  \`\`\`
  
  # Usage
  ${response.usage}
  
  # License
  ![GitHub Licence](https://img.shields.io/badge/license-${response.license}-blue.svg)
  
  # Contributing
  ${response.contributing}
  
  # Test
  \`\`\`bash
  ${response.test_command}
  \`\`\`
  
  # Questions
  If you have any questions, contact me at [${response.email}](mailto:${response.email}) or at GitHub [${response.username}](https://github.com/${response.username}).`;
  }
  
// TODO: Create a function to initialize app
function init() {

    inquirer
.prompt(questions)
.then((response) => {
    fs.writeFile('README.md', readmeString(response), (err) =>{
        err ? console.error(err) : console.log('Generating README.md...')
    })
});
}
// Function call to initialize app
init();