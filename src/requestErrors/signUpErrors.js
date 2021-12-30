import Swal from "sweetalert2";

function SignUpErrors(err) {
    if (err === 400) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Url de imagem inválido!</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
    } else if (err === 403) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>E-mail já cadastrado!</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
    } else if (err === 500) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Alguma coisa de errado aconteceu com o servidor! Aguarde alguns segundos!</h1>`,
            width: '50%',
            background: '#151515',
            confirmButtonColor: '#1877F2',
        });
    }
}

export {
    SignUpErrors,
}