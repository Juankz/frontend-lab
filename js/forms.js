function checkPass() {
    var pass1, pass2;
    pass1 = document.getElementById("pass");
    pass2 = document.getElementById("pass2");
    if (pass1.value != pass2.value) {
        pass2.setCustomValidity('Las contraseñas no concuerdan');
    } else {
        pass2.setCustomValidity('');
    }
}