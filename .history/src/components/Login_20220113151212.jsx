import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <Container className="w-50 m-auto my-3">
      <div className="display-6 text-center">Zaloguj się lub załóż konto</div>
    <div className="login-window d-flex flex-column">
        <label className="w-50 m-auto" for="fname">adres e-mail</label>
        <input className="my-1 w-50 m-auto" type="text" id="fname" name="firstname" placeholder="..."/>
        <label className="w-50 m-auto" for="fname">hasło</label>
        <input className="my-1 w-50 m-auto" type="text" id="fname" name="firstname" placeholder="..."/>
    </div>

    </Container>
  );
};

export default Login;
