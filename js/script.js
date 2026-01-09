let signupUsername = document.getElementById("signup-username");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");

let loginUsername = document.getElementById("login-username");
let loginPassword = document.getElementById("login-password");

let register = document.getElementById("register");
let login = document.getElementById("login");

// function: set user info to json (sign up)
function userToStorage() {
    if ((!signupUsername.value) || (!signupEmail.value) || (!signupPassword.value)) {
        alert("All information boxes must have inputs");
        return;
    }

    const user = { 
        username: signupUsername.value, 
        email: signupEmail.value, 
        password: signupPassword.value
    };

    let users = JSON.parse(localStorage.getItem("users")) || []; // pulls users in database or empty string

    users.push(user); // add user to users
    localStorage.setItem('users', JSON.stringify(users));

    alert("Sign Up Successful, Go to Log In");
}


// function: check if user is in system (log in)
function callUser() {
    let users = JSON.parse(localStorage.getItem("users")) || []; // pulls users from array

    let user = users.find(user => user.username === loginUsername.value); // searches for every user in users and finds the user.username value to match with loginUsername

    return user;
}

function isUserSignedUp() { // login button NOT working
    if ((!loginUsername.value) || (!loginPassword.value)) {
        alert("All information boxes must have inputs");
        return;
    }
    
    let user = callUser();

    if ((user) && (user.password === loginPassword.value)) {
        alert("Successfully logged in");
        window.location.href = "../success/index.html";
    }
    else {
        alert("Username or password is invalid");
    }
}

// function: returns feedback to user / alerts about password or email no account or successful log in (log in)

if (register) {
    register.addEventListener("click", userToStorage);
}

if (login) {
    login.addEventListener("click", isUserSignedUp);
}