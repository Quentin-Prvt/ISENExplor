let signIn = document.getElementById("signIn");
let Username = document.getElementById("Username");
let Password = document.getElementById("Password");

signIn.addEventListener('submit', event => {
    event.preventDefault();

    if (Username.value != '' && Password.value != '') {
        socket.emit("password", [Username.value]);
        socket.on('resPassword', res => {
            if (res == Password.value) {
                socket.emit("loggedIn", true);
                console.log("mdp correct");
                window.location.href = "/html/admin.html";
            } else {
                console.log("mdp incorrect");
            }
        })
    } else {
        console.log('empty field(s)'); // afficher erreur bla bla
    }
});