import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Firebase from "firebase";



const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const writeData = () => {
    
      Firebase.database()
        .ref("/cats")
        .child(childnum.childnum)
        .set({
          id: childnum.childnum + 1,
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
          color: document.getElementById("color").value,
          sex: document.getElementById("sex").value,
          region: document.getElementById("region").value,
          city: document.getElementById("city").value,
          phone: document.getElementById("phone").value,
          description: document.getElementById("description").value,
          created: new Date().toLocaleString(),
          user: user.name,
        });
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
