import { Button, Conteiner, Content, Header, Input } from '../../styles/SignInAndSignUpStyle.js';

export default function SignUpPage() {

    function doSignUp() {
        
    }
    return (
        <Conteiner>
            <Header>
                <h1> linkr </h1>
                <p> save, share and discover the best links on the web</p>
            </Header>
            <Content>
                <form onSubmit={doSignUp}>
                    <Input placeholder='e-mail'></Input>
                    <Input placeholder='password'></Input>
                    <Input placeholder='username'></Input>
                    <Input placeholder='picture url'></Input>
                    <Button type='submit'>Sign Up</Button>
                </form>
                <p>Switch back to log in</p>
            </Content>
        </Conteiner>
    )
}