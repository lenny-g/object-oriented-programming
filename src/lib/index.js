const inquirer = require("inquirer");
// const { Employee, Manager, Engineer, Intern } = require(".lib");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "number",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is your office number?",
  },
  {
    type: "list",
    name: "role",
    message: "What is your role?",
    choices: [
      { name: "Manager", value: "manager" },
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "intern" },
    ],
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is your office number?",
    when: (role) => role === "manager",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    when: (role) => role === "engineer",
  },

  {
    type: "input",
    name: "school",
    message: "What is the name of your school?",
    when: (role) => role === "intern",
  },
];

// const writeToFile = (fileName, data) => {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// };

const init = async () => {
  // const html = generateHTML(answers);
  // writeToFile("index.html", html);

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

init();
