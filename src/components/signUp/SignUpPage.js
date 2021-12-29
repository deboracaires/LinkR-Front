import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUpErrors } from '../../requestErrors/signUpErrors.js';
import { postSignUp } from '../../services/api.services.js';
import { Button, Conteiner, Content, Header, Input } from '../../styles/SignInAndSignUpStyle.js';
import { validateEmail, validatePassword, validateUserName } from '../../validations/signUpValidations.js';

export default function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');

    const navigate = useNavigate();
    
    function doSignUp(e) {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isUserNameValid = validateUserName(userName);
        if (isEmailValid && isPasswordValid && isUserNameValid && pictureUrl.length !== 0) {
            const body = {
                email,
                password,
                username: userName,
                pictureUrl,
            };
            postSignUp(body)
                .then((res) => console.log(res.data))
                .catch((err) => SignUpErrors(err.response.status))
        }
    }
    return (
        <Conteiner>
            <Header>
                <h1> linkr </h1>
                <p> save, share and discover the best links on the web</p>
            </Header>
            <Content>
                <form onSubmit={doSignUp}>
                    <Input
                        placeholder='e-mail'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    >
                    </Input>
                    <Input
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    >
                    </Input>
                    <Input
                        placeholder='username'
                        type='text'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    >
                    </Input>
                    <Input
                        placeholder='picture url'
                        type='url'
                        value={pictureUrl}
                        onChange={e => setPictureUrl(e.target.value)}
                        required
                    >
                    </Input>
                    <Button type='submit'>Sign Up</Button>
                </form>
                <p onClick={() => navigate('/')}>Switch back to log in</p>
            </Content>
        </Conteiner>
    )
}