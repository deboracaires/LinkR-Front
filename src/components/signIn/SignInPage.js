import { Button, Conteiner, Content, Header, Input } from '../../styles/SignInAndSignUpStyle.js';

export default function SignInPage() {

    function doLogIn() {
        
    }
    return (
        <Conteiner>
            <Header>
                <h1> linkr </h1>
                <p> save, share and discover the best links on the web</p>
            </Header>
            <Content>
                <form onSubmit={doLogIn}>
                    <Input placeholder='e-mail'></Input>
                    <Input placeholder='password'></Input>
                    <Button type='submit'>Log In</Button>
                </form>
                <p>First time? Create an account!</p>
            </Content>
        </Conteiner>
    )
}

