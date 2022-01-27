import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading, auth0 } = useAuth0();
  
  const updateData = (user, context, callback) => {
    user.user_metadata = user.app_metadata || {};
    // update the app_metadata that will be part of the response
    user.app_metadata.stripeID = 'abc123';
  
    // persist the app_metadata update
    auth0.users.updateUserMetadata(user.user_id, user.app_metadata)
      .then(function(){
        callback(null, user, context);
      })
      .catch(function(err){
        callback(err);
      });
  }

  update

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
          <Button onClick={() => logout({ returnTo: "https://michalgornicki.github.io/cats" })} className=" m-1 bg-green-button" variant="success">
            Wyloguj
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
