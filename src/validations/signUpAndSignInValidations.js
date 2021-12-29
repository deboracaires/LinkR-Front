import Swal from "sweetalert2";

function validateEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(email)) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>E-mail inválido!</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
    }
    
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (!passwordRegex.test(password)) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Senha inválida! Precisa conter no mínimo uma letra maiúscula,
             uma letra minúscula, um número, um caractere especial e no mínimo 8 (oito) caracteres.</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
    }
    return passwordRegex.test(password);
}

function validateUserName(userName) {
    if (userName.length < 6) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'> Nome de usuário inválido! Deve conter no mínimo 6 caracteres.</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
        return false;
    }
    return true;
}

export {
    validateEmail,
    validatePassword,
    validateUserName,
}