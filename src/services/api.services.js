import axios from 'axios';

const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/';

function postSignUp(body) {
    return axios.post(`${url}sign-up`, body);
}

export {
    postSignUp,
}