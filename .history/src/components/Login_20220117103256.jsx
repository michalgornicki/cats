import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  return (
    <div>

        <Button onClick={() => loginWithRedirect()} className="my-3 w-100" variant="success">
            Zatwierdź
          </Button>

          <Button onClick={() => logout({ returnTo: window.location.origin })} className="my-3 w-100" variant="success">
            Wyloguj
          </Button>

</div>
  );
};

export default Login;
