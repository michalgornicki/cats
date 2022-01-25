import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, HashRouter as Router, Routes, useParams } from "react-router-dom";
import { storage, firebase, db } from "../firebase.config.js";



import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../photos/1.jpg";

const Create = (childnum) => {

  let { id } = useParams();


  const { user, isAuthenticated, isLoading } = useAuth0();


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
          id: childnum.childnum + 1,
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
          color: document.getElementById("color").value,
          image: url,
          sex: document.getElementById("sex").value,
          region: document.getElementById("region").value,
          city: document.getElementById("city").value,
          phone: document.getElementById("phone").value,
          description: document.getElementById("description").value,
          created: new Date().toLocaleString(),
          user: "Michał",
        });

        document.getElementsByClassName("success-box")[0].style.visibility="visible"
    } else {
      window.alert("Proszę uzupełnić wszystkie pola");
    }
  };

  // upload images to firebase https://dev.to/samuelkarani/comment/14079

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  console.log(url)

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
          <Card.Img className="card-profile-photo" variant="top" src={url} />
          <div className="buttons w-50 m-4"></div>
        </div>


        <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>

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

    <div className="success-box" onClick={() => document.getElementsByClassName("success-box")[0].style.visibility="hidden"}>Ogłoszenie zostało opublikowane!</div>

    </Container>
  );
};

export default Create;
