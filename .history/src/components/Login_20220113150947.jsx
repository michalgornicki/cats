import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <Container className="w-50 m-auto my-3 text-center">
      <div className="display-6">Zaloguj się lub załóż konto</div>
    <div className="login-window d-flex flex-column">
    <label for="fname">Imię kota</label>
        <input className="my-3" type="text" id="fname" name="firstname" placeholder="Wpisz imię kota.."/><label for="fname">Imię kota</label>
        <input className="my-3" type="text" id="fname" name="firstname" placeholder="Wpisz imię kota.."/>
    </div>

    </Container>
  );
};

export default Login;
