import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "cats-a081b.firebaseapp.com",
  projectId: "cats-a081b",
  storageBucket: "cats-a081b.appspot.com",
  messagingSenderId: "639433979518",
  appId: "1:639433979518:web:d815f83bcc4097c1d14a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return (
    <Container className="w-50 m-auto my-3">
      <div className="display-6 text-center">Zaloguj się lub załóż konto</div>
    <div className="login-window d-flex flex-column p-5 w-75 m-auto mt-3">
        <label for="fname">adres e-mail</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>
        <label for="fname">hasło</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>

        <Button className="my-3 w-100" variant="success">
            Zatwierdź
          </Button>
          <div>Nie pamiętam hasła</div>
    </div>


    </Container>
  );
};

export default Login;
