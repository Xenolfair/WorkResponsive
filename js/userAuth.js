class User {
    constructor(Name, Password) {
        this.Name = Name,
        this.Password = Password;
    }
}

var imgDefault =  {
    imagenes: "https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png",
};

function goto(page) {
    switch (page) {
        case "ix":
            window.location.href = "index.html";
            break;
        case "hm":
            window.location.href = "home.html";
            break;
        case 'lg':
            window.location.href = 'login.html'
        case "pl":
            window.location.href = 'plantilla.html'
        case 'na':
            window.location.href = 'noAuth.html'
        default:
            console.log("Página no reconocida");
    }
}

window.goto = goto;

function registerUser() {
    const newUserName = document.getElementById('userNameInp');
    const newPassword = document.getElementById('passwordInp');
    const sanitizedUsername = newUserName.value.replace(/[^\w]/g, '');
    newUserName.value = sanitizedUsername;

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = savedUsers.find((user) => user.Name === newUserName.value);

    if (newUserName.value === '' || newPassword.value === '') {
        Toastify({
            text: "¡Tu nombre de usuario o contraseña no puede estar vacía!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
                color: "#0b2a2b",
                padding: "10px"
            },
        }).showToast();
    } else if (newUserName.value.length > 20  || newPassword.value.length < 5 || newUserName.value.length < 3) {
        Toastify({
            text: "¡Tu nombre y contraseña debe de ser entre 5 y 20 carácteres!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
                color: "#0b2a2b",
                padding: "10px"
            },
        }).showToast();
    } else if (existingUser) {
        Toastify({
            text: "Este nombre de usuario está en uso, porfavor usa otro",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "white",
                color: "#0b2a2b",
                padding: "10px"
            },
        }).showToast();
    } else {
        const newUser = new User(newUserName.value, newPassword.value);
        
        savedUsers.push(newUser);

        localStorage.setItem('loggedInUser', newUserName.value);

        localStorage.setItem('users', JSON.stringify(savedUsers));

        Toastify({
            text: "¡Tu cuenta fue creada satisfactoriamente!",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "white",
                color: "#0b2a2b",
                padding: "10px"
            },
        }).showToast();

        setTimeout(()=> {
            window.location = '/html/home.html'
        }, 2000);
    }
}

function loginUser() {

    const userName = document.getElementById('userNameInpLogin');
    const password = document.getElementById('passwordInpLogin');
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = savedUsers.find((user) => user.Name === userName.value && user.Password === password.value);

    if ( loggedInUser ) {

        localStorage.setItem('loggedInUser', loggedInUser.Name);

        Toastify({
            text: "Iniciando sesión...",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();

        setTimeout(()=> {
            window.location = '/html/home.html'
        }, 2000);

    } else {
        
        Toastify({
            text: "Esta cuenta no existe o la información es incorrecta.",
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#161717",
            },
        }).showToast();

    }

}

function setRol() {
    const roles = {
        "SuperAdmin": 0,
        "Admin": 1,
        "Moderator": 2,
        "Basic-User":3
    }
}