import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Firebase from "firebase";

const Login = (usernum) => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const writeUser = () => {
      Firebase.database()
        .ref("/cats")
        .child(usernum.usernum)
        .set({
          user: user.name,
        });

        document.getElementsByClassName("success-box")[0].style.visibility="visible"
        window.location.href = "https://michalgornicki.github.io/cats";
  };

  


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
