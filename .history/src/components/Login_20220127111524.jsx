import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Firebase from "firebase";

const Login = (usernum) => {

  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    writeUser();
  }, []);

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const writeUser = () => {
    if (user) {
      Firebase.database()
        .ref("/users")
        .child(usernum.usernum)
        .set({
          user: user.name,
        });
      }
  };

  const Login


  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()} className=" m-1 bg-green-button" variant="success">
          Zaloguj się
        </Button>
      ) : (
        <div>

          <img className="user-photo" src={user.picture} alt={user.name} />
          <Link className="link-unstyled text-white mx-3" to="/Dashboard">
          <Button onClick={""} className=" m-1 bg-green-button" variant="success">
            Moje konto
          </Button>
          </Link>
          <Button onClick={() => logout({ returnTo: window.location.origin })} className=" m-1 bg-green-button" variant="success">
            Wyloguj
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
