import React, { useState, useEffect } from "react";
import Firebase from "firebase";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../photos/1.jpg";

const Create = (props) => {

  
  const writeData = () => {
    Firebase.database().ref("/").push({
      id: "1",
      name: "Minerwa",
      age: 1,
      color: "szary",
      image: "https://i.postimg.cc/c1VV4ShW/1.jpg",
      sex: "kotka",
      region: "Mazowieckie",
      city: "Warszawa",
      phone: "662-848-252",
    });
  };


  return (
    <Container>
      <div className="display-6">Stwórz nowe ogłoszenie</div>

      <Card className="card-profile">
        <label for="fname">Imię kota</label>
        <input onChange={() => console.log(document.getElementById("name").value)} id ="name" className="my-3" type="text"  name="firstname" placeholder="Wpisz imię kota.." />
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={catPhoto2} />
          <div className="buttons w-50 m-4"></div>
        </div>
        <div className="flex w-25 m-1">
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
        </div>
        <Card.Body>
          <form className="d-flex flex-column w-50" action="/action_page.php">
            <label for="age">Wiek</label>
            <select id="age" name="age" onChange={() => console.log(document.getElementById("age").value)}>
              <option value="1">Mniej niż rok</option>
              <option value="2">1 rok</option>
              <option value="3">2 lata</option>
              <option value="4">3 lata</option>
              <option value="5">4 lata</option>
              <option value="6">5 lat</option>
              <option value="7">6 lat</option>
              <option value="8">11+ lat</option>
              <option value="9">11+ lat</option>
            </select>

            <label for="sex">Płeć</label>
            <select id="sex" name="sex" onChange={() => console.log(document.getElementById("sex").value)}>
              <option value="1">Kot</option>
              <option value="2">Kotka</option>
            </select>
            <label for="color">Kolor sierści</label>
            <select id="color" name="color" onChange={() => console.log(document.getElementById("color").value)}>
              <option value="1">Szary</option>
              <option value="2">Czarny</option>
              <option value="3">Biały</option>
              <option value="4">Rudy</option>
            </select>
          </form>

          <div className="d-flex flex-column">
            <label for="fname">Podaj swój kontaktowy numer telefonu</label>
            <textarea
              onChange={() => console.log(document.getElementById("phone").value)}
              className="w-75 text-wrap"
              type="text"
              id="phone"
              name="firstname"
              placeholder="numer telefonu.."
            />
          </div>

          <div className="d-flex flex-column">
            <label for="fname">Stwórz krótki opis kota</label>
            <textarea
              onChange={() => console.log(document.getElementById("description").value)}
              className="w-75 height-20vh text-wrap"
              type="text"
              id="description"
              name="firstname"
              placeholder="Napisz historię kota.."
            />
          </div>
        </Card.Body>
        <Button onClick={writeData} className="my-3 w-50" variant="success">
          Zatwierdź
        </Button>
      </Card>
    </Container>
  );
};

export default Create;
