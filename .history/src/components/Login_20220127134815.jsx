import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [data1, setData1] = useState([]);
  const [usernum, setUsernum] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    let ref = Firebase.database().ref("/users");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData1(stateSnapshot);
      setUsernum(stateSnapshot.length);
    });
  };

  console.log(data1);
  console.log(usernum);



  const Login = (callback) => {
    setTimeout(() => {
      loginWithRedirect();
      callback();
    }, 5000);
  };

  const writeData = () => {
    console.log("aaa")
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => Login(writeData)} className=" m-1 bg-green-button" variant="success">
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
          <Button
            onClick={() => logout({ returnTo: "http://localhost:3000/" })}
            className=" m-1 bg-green-button"
            variant="success"
          >
            Wyloguj
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
