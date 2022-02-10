import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, HashRouter as Router, Routes, useParams } from "react-router-dom";


const Cat1 = (props) => {

  console.log(props.data0)

  const { user, isAuthenticated, isLoading } = useAuth0();


  const Copy = () => {
    window.navigator.clipboard.writeText("https://michalgornicki.github.io/cats/#/profiles/" + props.data0[id - 1].id);
  }

  let { id } = useParams();

  if (!props.data0) {




  }

  else {


  }



};

export default Cat1;
