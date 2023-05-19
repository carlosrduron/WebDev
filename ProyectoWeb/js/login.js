var validators = {
    "text": /^[A-Za-z\s]*$/,
    "correo": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "doble_espacio": /\s{2,}/
};

var formInputs = {
    txtPass: null,
    txtCorreo: null,
};

var formInputsErrors = {
    txtPassErr: null,
    txtCorreoErr: null,
};

document.addEventListener("DOMContentLoaded", function(e) {
    formInputs.txtCorreo = document.getElementById("txtCorreo");
    formInputsErrors.txtCorreoErr = document.getElementById("txtCorreoErr");

    formInputs.txtPass = document.getElementById("txtPass");
    formInputsErrors.txtPassErr = document.getElementById("txtPassErr");


    formInputs.txtPass.addEventListener("change", inputOnChange);
    formInputs.txtPass.addEventListener("blur", inputOnChange);

    formInputs.txtCorreo.addEventListener("change", inputOnChange);
    formInputs.txtCorreo.addEventListener("blur", inputOnChange);
});


function inputOnChange(e) {
    switch (e.target.name) {
        case "txtPass":

            if (validators.text.test(e.target.value)) {
                formInputsErrors.txtNombreErr.innerHTML = "";
            } else {
                formInputsErrors.txtNombreErr.innerHTML = "La contraseña no es válida";
                formInputs.txtNombre.focus();
            }
            break;

        case "txtCorreo":

            if (validators.correo.test(e.target.value)) {
                formInputsErrors.txtCorreoErr.innerHTML = "";
            } else {
                formInputsErrors.txtCorreoErr.innerHTML = "El correo no es válido";
                formInputs.txtCorreo.focus();
            }

            break;

    }
}