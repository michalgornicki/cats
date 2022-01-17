import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Login = () => {


  return (
    <Container className="w-50 m-auto my-3">
      <div className="display-6 text-center">Zaloguj się lub załóż konto</div>
    <div className="login-window d-flex flex-column p-5 w-75 m-auto mt-3">
        <label for="fname">adres e-mail</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>
        <label for="fname">hasło</label>
        <input className="my-1" type="text" id="fname" name="firstname" placeholder="..."/>

        <Button onClick={signInWithGoogle} className="my-3 w-100" variant="success">
            Zatwierdź
          </Button>
          <div>Nie pamiętam hasła</div>
    </div>


    </Container>
  );
};

export default Login;
