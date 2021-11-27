// import external and internal packages
const inquirer = require("inquirer");
const fs = require("fs");
const { Manager, Engineer, Intern } = require("./lib");

// function to validate that a number has been used for the id and office number
const validateInput = (input) => {
  if (!input) {
    return "Please enter a valid response";
  } else {
    return true;
  }
};

const validateNumericalValue = (id) => {
  if (isNaN(id)) {
    return "Please enter a numerical value";
  }

  if (!id) {
    return "Please enter a numerical value";
  } else {
    return true;
  }
};

// validation function to make sure someone has used an actual email for the email
const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  if (!email) {
    return "Please enter a valid email";
  } else {
    return "Please enter a valid email";
  }
};

// team name
const mainQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "What is your teams name?",
    validate: validateInput,
  },
];

// team member questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?",
    validate: validateNumericalValue,
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: validateEmail,
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
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
    validate: validateNumericalValue,
    when: ({ role }) => role === "manager",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    when: ({ role }) => role === "engineer",
    validate: validateInput,
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of your school?",
    when: ({ role }) => role === "intern",
  },
  {
    type: "confirm",
    name: "addAnother",
    message: "Do you wish to add another employee",
  },
];

// render in html function
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};

// to get either office number/ github/ school depending on the type of employee
const getOtherInfo = (employee) => {
  if (employee.getRole() === "Manager") {
    return `Office Number: ${employee.getOfficeNumber()}`;
  }
  if (employee.getRole() === "Engineer") {
    return `Github: <a href="https://github.com/${employee.getGithub()}"> ${employee.getGithub()} </a>`;
  }
  if (employee.getRole() === "Intern") {
    return `School: ${employee.getSchool()}`;
  }
};

const constructIcon = (employee) => {
  if (employee.getRole() === "Manager") {
    return `<i class="fas fa-mug-hot"></i> `;
  }
  if (employee.getRole() === "Engineer") {
    return `<i class="fas fa-tools"></i>`;
  }
  if (employee.getRole() === "Intern") {
    return `<i class="fas fa-graduation-cap"></i>`;
  }
};

const constructCard = (each) => {
  const employeeCard = `<div class="card" style="width: 18rem">
  <div class="card-body">
   <h5 class="card-name">${each.getName()}</h5>
   ${constructIcon(each)} <h5 class="card-role">${each.getRole()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">Id: ${each.getId()}</li>
    <li class="list-group-item email">Email: <a href="mailto:${each.getEmail()}">${each.getEmail()}</a></li>
    <li class="list-group-item other">${getOtherInfo(each)}</li>
  </ul>
</div>`;
  return employeeCard;
};

const generateHTML = (employees, teamNameAnswer) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Meet the team!</title>
      <!-- fontAwesome stylesheet -->
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      />
      <!-- googleFonts stylesheet -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap"
        rel="stylesheet"
      />
      <!-- bootstraps cards stylesheet -->
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <!-- bootstrap jumbotron stylesheet -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <!-- internal stylesheet -->
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <!-- jumbotron -->
      <div class="bg-light p-5 rounded-lg">
        <h1 class="display-4 text-center">MEET THE TEAM:</h1>
        <h2 class="display-5 text-center">${teamNameAnswer.teamName.toUpperCase()}</h2>
      </div>

      <section>
        <h2 class="text-center mt-1">Manager</h2>
        <div class="card-container d-flex">
        ${employees.managers.map(constructCard).join("")}
        </div>
      </section>

      <section>
        <h2 class="text-center">Engineers</h2>
        <div class="card-container d-flex">
        ${employees.engineers.map(constructCard).join("")}
        </div>
      </section>

      <section>
        <h2 class="text-center">Interns</h2>
        <div class="card-container d-flex">
        ${employees.interns.map(constructCard).join("")}
        </div>
      </section>
    
      <!-- Footer -->
      <footer class="page-footer font-small blue">
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://github.com/lenny-g"> Lenny G</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
  
      <!-- scripts JQuery -->
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <!-- scripts internal script -->
      <script src="../src/lib/index.js"></script>
    </body>
  </html>
  `;
};

const init = async () => {
  let inProgress = true;
  const managers = [];
  const engineers = [];
  const interns = [];

  const teamNameAnswer = await inquirer.prompt(mainQuestion);

  while (inProgress) {
    const answers = await inquirer.prompt(questions);

    if (answers.role === "manager") {
      const manager = new Manager({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
      });
      managers.push(manager);
    }

    if (answers.role === "engineer") {
      const engineer = new Engineer({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
      });
      engineers.push(engineer);
    }

    if (answers.role === "intern") {
      const intern = new Intern({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        school: answers.school,
      });
      interns.push(intern);
    }

    if (!answers.addAnother) {
      inProgress = false;
    }
  }

  const employees = { managers, engineers, interns };
  console.log(employees);
  const html = generateHTML(employees, teamNameAnswer);
  writeToFile("./dist/index.html", html);
};

init();
