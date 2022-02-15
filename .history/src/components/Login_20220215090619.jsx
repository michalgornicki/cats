import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const Login = () => {
    loginWithRedirect();
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={Login} className=" m-1 bg-green-button" variant="success">
          Zaloguj się
        </Button>
      ) : (
        <div className="d-flex flex-column flex-lg-row">
          <Link className="link-unstyled text-white mx-3" to="/Dashboard">
            <Button onClick={""} className=" m-1 bg-green-button" variant="success">
              Moje konto
            </Button>
          </Link>
          <Button onClick={() => logout({ returnTo: "https://michalgornicki.github.io/cats/" })} className=" m-1 bg-green-button" variant="success">
            Wyloguj
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
