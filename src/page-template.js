module.exports = (teamMembers) => {
    const managers = teamMembers.filter(employee => employee.getRole() === 'Manager')
    const engineers = teamMembers.filter(employee => employee.getRole() === 'Engineer')
    const interns = teamMembers.filter(employee => employee.getRole() === 'Intern')
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Oswald:wght@500&family=Raleway:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    
        <title>Team Profiles</title>
    </head>
    
    <body>
        <header>
            My Engineering Team
        </header>
    
        <div class="container">
            <div class = row>
                ${managers.map(manager => `<div class="card shadow col-3">
                    <div class="card-header text-white bg-primary pb-0 name">${manager.getName()}</div>
                    <div class="card-header text-white bg-primary pt-0 role"><i class="fas fa-clipboard mr-2"></i>${manager.getRole()}</div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`)}
                ${engineers.map(engineer => `<div class="card shadow col-3">
                    <div class="card-header text-white bg-primary pb-0 name">${engineer.getName()}</div>
                    <div class="card-header text-white bg-primary pt-0 role"><i class="fas fa-microscope mr-2"></i>${engineer.getRole()}</div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>`)}
                ${interns.map(intern => `<div class="card shadow col-3">
                    <div class="card-header text-white bg-primary pb-0 name">${intern.getName()}</div>
                    <div class="card-header text-white bg-primary pt-0 role"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`)}
            </div>
        </div>
    
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/b686f34ba1.js" crossorigin="anonymous"></script>
    
    </body>
    
    </html>`;
}