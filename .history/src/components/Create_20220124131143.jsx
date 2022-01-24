import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../photos/1.jpg";

const Create = (props) => {

  return (
    <Container>
      <div className="display-6">Stwórz nowe ogłoszenie</div>

      <Card className="card-profile">
        <label for="fname">Imię kota</label>
        <input className="my-3" type="text" id="fname" name="firstname" placeholder="Wpisz imię kota.." />
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
              <option value="1">0-2 lata</option>
              <option value="2">3-5 lat</option>
              <option value="3">6-10 lat</option>
              <option value="4">11+ lat</option>
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
              id="description"
              name="firstname"
              placeholder="numer telefonu.."
            />
          </div>

          <div className="d-flex flex-column">
            <label for="fname">Stwórz krótki opis kota</label>
            <textarea
              className="w-75 height-20vh text-wrap"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Napisz historię kota.."
            />
          </div>
        </Card.Body>
        <Button onClick={props.writeData} className="my-3 w-50" variant="success">
          Zatwierdź
        </Button>
      </Card>
    </Container>
  );
};

export default Create;
