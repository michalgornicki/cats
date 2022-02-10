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

  if (props.data0.length < 2) {

    return(

    <div className="text-center">Ładowanie profilu</div>

    )
  }

  else {

    return (
      <Container className="fading">
        <div className="display-6">Profil kota</div>
  
        
        <Card className="card-profile">
          <Card.Title className="display-6 mb-5">Cześć, nazywam się {props.data0[id - 1].name}!</Card.Title>
          <Card.Img className="card-profile-photo" variant="top" src={props.data0[id - 1].image} />
          <div className="d-flex  align-bottom">
            <div className="buttons m-4">
            <Button className="m-1 bg-green-button" variant="success">
                Telefon: {isAuthenticated? props.data0[id - 1].phone : "***-***-***"}
              </Button>
              <Button className="m-1 bg-green-button" variant="success">
              {isAuthenticated? "Dodaj do ulubionych ❤️" : "Zaloguj się aby ❤️"}	
              </Button>
              <Button className="m-1 bg-green-button" variant="success" onClick={Copy}>
                Kopiuj link &#128236;
              </Button>
            </div>
          </div>
          <Card.Body>
            <div className="display-6 my-3">O mnie:</div>
            <div className="div">Wiek: {props.data0[id - 1].age} lat</div>
            <div className="div">Płeć: {props.data0[id - 1].sex}</div>
            <div className="div">Kolor sierści: {props.data0[id - 1].color}</div>
            <div className="display-6 my-3">Moja historia:</div>
            <div className="div">
              {props.data0[id - 1].description}
            </div>
          </Card.Body>
        </Card>
  
      </Container>
    );

  }



};

export default Cat1;
