import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import fav from "../heart.png";
import { Link } from "react-router-dom";



const Database = (data0) => {

  const regions = [
    "Dolnośląskie",
    "Kujawsko-pomorskie",
    "Lubelskie",
    "Lubuskie",
    "Łódzkie",
    "Małopolskie",
    "Mazowieckie",
    "Opolskie",
    "Podkarpackie",
    "Podlaskie",
    "Pomorskie",
    "Śląskie",
    "Świętokrzyskie",
    "Warmińsko-mazurskie",
    "Wielkopolskie",
    "Zachodniopomorskie",
  ];

  const [Region, setRegion] = useState(regions);
  const [Sex, setSex] = useState(["kotek", "kotka"]);
  const [minAge, setMinAge] = useState([0, 50]);

  const regionCheck = (e) => {
    e.target.checked ? setRegion(e.target.value) : setRegion([]);
    console.log(Region);
  };

  const sexCheck = (e) => {
    e.target.checked ? setSex(e.target.value) : setSex([]);
  };

  return (
    <div>
      <Container>
        <div className="display-6">Koty czekające na nowy dom</div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap fading">
          {data0.data0
            .filter((item) => Region.includes(item.region))
            .filter((item) => item.age > minAge[0] && item.age <= minAge[1])
            .filter((item) => Sex.includes(item.sex))
            .map((item) => (
              <Card className="card card-hover">
                <Link className="link-unstyled" to={"/profiles/" + item.id}>
                  <div className="position-relative">
                    <Card.Img className="card-photo" variant="top" src={item.image} />
                    <img className="fav" src={fav} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.city + ", " + item.region}</Card.Text>
                    <Card.Text className="text-secondary">dodane: {item.created}</Card.Text>
                    <Card.Text className="text-secondary">dodane przez: {item.user}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            ))}
        </Container>
      </Container>

      <Container className="checkboxes w-auto">
        <form className="d-flex flex-column m-3">
          <div className="text-uppercase">Lokalizacja</div>

          <div>
            <input type="radio" onClick={() => setRegion(regions)} id="region1" name="region" value="Mazowieckie" />
            <label className="mx-1" for="region">
              Wszystkie
            </label>
          </div>

          {regions.map((item) => (
            <div>
              <input type="radio" onClick={regionCheck} name="region" value={item} />
              <label className="mx-1" for="region">
                {item}
              </label>
            </div>
          ))}
        </form>

        <form className="d-flex flex-column m-3">
          <div className="text-uppercase">Wiek</div>
          <div>
            <input type="radio" onClick={() => setMinAge([0, 50])} id="age1" name="age" value="baby" />
            <label className="mx-1" for="age">
              Wszystkie
            </label>
          </div>
          <div>
            <input type="radio" onClick={() => setMinAge([0, 2])} id="age1" name="age" value="baby" />
            <label className="mx-1" for="age">
              0-2 lata
            </label>
          </div>
          <div>
            <input type="radio" onClick={() => setMinAge([3, 5])} id="age2" name="age" value="young" />
            <label className="mx-1" for="age">
              3-5 lat
            </label>
          </div>
          <div>
            <input type="radio" onClick={() => setMinAge([6, 10])} id="age3" name="age" value="adult" />
            <label className="mx-1" for="age">
              6-10 lat
            </label>
          </div>
          <div>
            <input type="radio" onClick={() => setMinAge([11, 50])} id="age4" name="age" value="older" />
            <label className="mx-1" for="age">
              11+ lat
            </label>
          </div>
        </form>

        <form className="d-flex flex-column m-3">
          <div className="text-uppercase">Płeć</div>
          <div>
            <input type="radio" onClick={() => setSex(["kotek", "kotka"])} id="sex" name="vehicle1" value="kot" />
            <label className="mx-1" for="vehicle1">
              Obie płcie
            </label>
          </div>
          <div>
            <input type="radio" onClick={sexCheck} id="sex" name="vehicle1" value="kotek" />
            <label className="mx-1" for="vehicle1">
              kotek
            </label>
          </div>
          <div>
            <input type="radio" onClick={sexCheck} id="sex" name="vehicle1" value="kotka" />
            <label className="mx-1" for="vehicle1">
              Kotka
            </label>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Database;
