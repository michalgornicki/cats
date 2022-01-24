import React, { useState, useEffect } from "react";
import Firebase from "firebase";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../photos/1.jpg";

const Create = (childnum) => {
  const writeData = () => {
    if (
      document.getElementById("name").value &&
      document.getElementById("age").value &&
      document.getElementById("color").value &&
      document.getElementById("sex").value &&
      document.getElementById("region").value &&
      document.getElementById("city").value &&
      document.getElementById("phone").value
    ) {
      Firebase.database()
        .ref("/")
        .child(childnum.childnum)
        .set({
          id: "1",
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
          color: document.getElementById("color").value,
          image: "https://i.postimg.cc/c1VV4ShW/1.jpg",
          sex: document.getElementById("sex").value,
          region: document.getElementById("region").value,
          city: document.getElementById("city").value,
          phone: document.getElementById("phone").value,
          created: new Date().toLocaleString(),
        });

        document.getElementsByClassName("success-box")[0].style.display="block"
    } else {
      window.alert("Proszę uzupełnić wszystkie pola");
    }
  };

  return (
    <Container>
      <div className="display-6">Stwórz nowe ogłoszenie</div>

      <Card className="card-profile">
        <label for="fname">Imię kota</label>
        <input
          onChange={() => console.log(document.getElementById("name").value)}
          id="name"
          className="my-3"
          type="text"
          name="firstname"
          placeholder="Wpisz imię kota.."
        />
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
              <option value="0">Mniej niż rok</option>
              <option value="1">1 rok</option>
              <option value="2">2 lata</option>
              <option value="3">3 lata</option>
              <option value="4">4 lata</option>
              <option value="5">5 lat</option>
              <option value="6">6 lat</option>
              <option value="7">7 lat</option>
              <option value="8">8 lat</option>
              <option value="9">9 lat</option>
              <option value="10">10 lat</option>
              <option value="11">11 lat</option>
              <option value="12">12 lat</option>
              <option value="13">13 lat</option>
              <option value="14">14 lat</option>
              <option value="15">15 lat</option>
              <option value="16">16 lat</option>
              <option value="17">17 lat</option>
              <option value="18">18 lat</option>
              <option value="19">19 lat</option>
            </select>

            <label for="sex">Płeć</label>
            <select id="sex" name="sex" onChange={() => console.log(document.getElementById("sex").value)}>
              <option value="kotek">Kot</option>
              <option value="kotka">Kotka</option>
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
            <label for="fname">Podaj województwo</label>
            <textarea
              onChange={() => console.log(document.getElementById("region").value)}
              className="w-75 text-wrap"
              type="text"
              id="region"
              name="firstname"
              placeholder="Wpisz województwo.."
            />
          </div>

          <div className="d-flex flex-column">
            <label for="fname">Podaj miasto</label>
            <textarea
              onChange={() => console.log(document.getElementById("city").value)}
              className="w-75 text-wrap"
              type="text"
              id="city"
              name="firstname"
              placeholder="Wpisz miasto.."
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

    <div className="success-box"></div>

    </Container>
  );
};

export default Create;
