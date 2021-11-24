const inquirer = require("inquirer");
const fs = require("fs");

const mainQuestions = [
    {
       type: "list",
       name: "role",
       message: "What is your role?",
          choices: [
              { name: "Manager", value: "manager"},
              { name: "Engineer", value: "engineer"},
              { name: "Intern", value: "intern" }
          ]
      },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is your ID? ",
    },
  
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    }, ]


managerQuestion = [{
      
    }]

const generateHTML = (answers) => {
    const {
        role,
        name,
        id,
        email,
        officeNumber,
        github,
        school
}
}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
};
  

const init = async () => {
    const html = generateHTML(roles);
    writeToFile("index.html", html);

    const answers = await inquirer.prompt(questions);
};

init();