import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInErrors } from '../../requestErrors/signInErrors.js';
import { postSignIn } from '../../services/api.services.js';
import { Button, Conteiner, Content, Header, Input } from '../../styles/SignInAndSignUpStyle.js';
import { validateEmail, validatePassword } from '../../validations/signUpAndSignInValidations.js';

export default function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function doLogIn(e) {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        if (isEmailValid && isPasswordValid) {
            const body = {
                email,
                password,
            };
            postSignIn(body)
                .then((res) => console.log(res.data))
                .catch((err) => SignInErrors(err.response.status))
        }
    }
    return (
        <Conteiner>
            <Header>
                <h1> linkr </h1>
                <p> save, share and discover the best links on the web</p>
            </Header>
            <Content>
                <form onSubmit={doLogIn}>
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
                    <Button type='submit'>Log In</Button>
                </form>
                <p onClick={() => navigate('/signup')}>First time? Create an account!</p>
            </Content>
        </Conteiner>
    )
}

