document.getElementsById('post-form').onsubmit = validate;

function validate() {
    clearErrors();

    let isValid = true;

    let author = document.getElementById('author').value.trim();
    if (author === ""){
        document.getElementById("err-author").style.display = "block";
        isValid = false;
    }
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName('err');
    for(leti = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}