import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  const { loginWithRedirect } = useAuth0();


  return (
    <Container className="w-50 m-auto my-3">
      <div className="display-6 text-center">Zaloguj się lub załóż konto</div>
    <div className="login-window d-flex flex-column p-5 w-75 m-auto mt-3">
        <label for="fname">adres e-mail</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>
        <label for="fname">hasło</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>

        <Button onClick={() => loginWithRedirect()} className="my-3 w-100" variant="success">
            Zatwierdź
          </Button>

   
          <div>Nie pamiętam hasła</div>
    </div>


    </Container>
  );
};

export default Login;
