document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("form");
    const form_Control = document.getElementById("form-control");
    var usuario = document.getElementById("user");
    var email = document.getElementById("email");
    var pass = document.getElementById("passw");
    var pass2 = document.getElementById("passw2");

    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,32})\S$/;

    form.addEventListener("submit", e => {
        e.preventDefault();
        validar();
    });

    function validar() {
        var userValue = usuario.value.trim();
        var emailValue = email.value.trim();
        var passValue = pass.value.trim();
        var pass2Value = pass2.value.trim();

        if (userValue === "") {
            errorFor(usuario, "El usuario debe ser válido.");
        } else {
            successFor(usuario);
        }

        if (emailValue === "") {
            errorFor(email, "El campo no debe quedar vacío.");
        } else if (!forEmail(emailValue)) {
            errorFor(email, "Parámetros de correo no válidos.");
        } else {
            successFor(email);
        }

        if (passValue === "") {
            errorFor(pass, "El campo no debe quedar vacío.");
        } else if (!passRegex.test(pass)) {
            errorFor(pass, "Contraseña no válida.");
        } else {
            successFor(pass);
        }

        if (pass2Value === "") {
            errorFor(pass2, "Valores de campo no válido");
        } else if (pass2Value !== passValue) {
            erroFor(pass2, "Las contraseñas no coinciden");
        } else {
            successFor(pass2);
        }
    }

    function errorFor(input, message) {
        var formControl = input.parentElement;
        formControl.className = "form-control error";
        var small = formControl.querySelector("small");
        small.innerText = message;
    }

    function successFor(input) {
        var formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function forEmail(email) {
        return emailRegex.test(email);
    }

});