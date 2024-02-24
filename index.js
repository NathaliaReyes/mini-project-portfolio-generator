const inquirer = require('inquirer');
const fs = require('fs');

const createHtmlFile = ({nombre, country, bio, github, linkedln, email}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <script src="https://kit.fontawesome.com/b40afd65fb.js" crossorigin="anonymous"></script>
    <title>Portfolio Generator</title>
</head>
<body style="margin: 0; padding: 0; box-sizing: border-box;">
    <header class="mt-3">
      <nav class="navbar" role="navigation" aria-label="main navigation" >
        <div class="navbar-brand ml-4">
          <a>
            <img src="./img/monkey-logo.png" alt="Monkey-Logo-Portfolio-Generator" width="150" height="150">
          </a>
        
          <a>
            <h1 class="title  ml-3">Hi! My name is ${nombre}</h1>
            <br>
            <h2 class="subtitle ml-3">I am from ${country}</h2>
          </a>
        </div>
      </nav>


    </header>
    <main>
      <h2 class="subtitle ml-4 mt-4 has-text-danger has-text-weight-bold">MiniBio:</h2>
      <p class="primary ml-4">${bio}</p>
      <table class="table is-bordered is-striped is-hoverable is-fullwidth m-4">
        <tbody>
          <tr>
            <th>My GitHub username is </th>
            <td><a href="https://github.com/${github}" title="GitHub profile">${github}</a>
            </td>
          </tr>
          <tr>
            <th>Linkedlin:</th>  
            <td><a href="https://www.linkedin.com/in/${linkedln}" title="Linkedlin profile">${linkedln}</a>
            </td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>${email}</td>
          </tr>
          
        </tbody>
      </table>

    </main>
    <footer style="position: fixed; width: 100%; left: 0; bottom: 0; padding: 10px; text-align: center;">
      <h3>Made with <i class="fa-solid fa-heart"></i> by Silvia Reyes</h2><br>
      <p>
          &copy; 2023 Portfolio Generator. All rights reserved.
      </p>
    </footer>
    
</body>
</html>`


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'nombre',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'country',
    },
    {
      type: 'input',
      message: 'Tell us something about you?',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your GitHub profile?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your Linkedln profile?',
      name: 'linkedln',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response);
    let newString = JSON.stringify(response);

    console.log('usuario registrado!')
    console.log(newString);

    fs.writeFile('index.html', createHtmlFile(response), (err) =>
      err ? console.error(err) : console.log('File created!')
    )
  });