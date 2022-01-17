import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()} className=" m-1" variant="success">
          Zaloguj się
        </Button>
      ) : (
        <div>
          <Button onClick={() => logout({ returnTo: window.location.origin })} className=" m-1" variant="success">
            Moje konto
          </Button>
          <Button onClick={() => logout({ returnTo: window.location.origin })} className=" m-1" variant="success">
            Wyloguj
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
