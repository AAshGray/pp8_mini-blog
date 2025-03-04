document.getElementsById('post-form').onsubmit = validate;

function validate() {
    clearErrors();
}

function clearErrors() {
    let errors = document.getElementsByClassName('err');
    for(leti = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}