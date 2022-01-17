import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Firebase from "./Firebase";
import { Navigate } from "react-router-dom";

const Signup = () => {

  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      Firebase.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Navigate to="/dashboard" />;
  }


  return (
    <Container className="w-50 m-auto my-3">
       <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>

    </Container>
  );
};

export default Login;
