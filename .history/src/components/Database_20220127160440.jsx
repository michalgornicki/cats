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

  console.log(data0.data0.map((item) => item));

  return (
    <div className="d-flex flex-row">

      
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
            )).reverse()}
        </Container>
      </Container>
    </div>
  );
};

export default Database;
