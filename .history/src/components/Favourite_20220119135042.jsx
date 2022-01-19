
import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data";
import fav from "../heart.png";
import { Link } from "react-router-dom";


const Favourite = () => {

  const [Region, setRegion] = useState(["Mazowieckie" , "Podlaskie" , "Lubelskie" , "Pomorskie" , "Małopolskie", "Łódzkie"]);
  const [Sex, setSex] = useState([ "kotek", "kotka"]);
  const [minAge, setMinAge] = useState([0, 50]);

  console.log(Region)


  const regionCheck = (e) => {
    e.target.checked ?
    setRegion(e.target.value)
    : 
    setRegion([])

  }

  const sexCheck = (e) => {
    e.target.checked ?
    setSex(e.target.value)
    : 
    setSex([])

  }

  return (
    <div>
      <Container>
        <div className="display-6">
          Ulubione koty
        </div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap fading">

        {data
        .filter((item) => Region.includes(item.region))
        .filter((item) => item.age > minAge[0] && item.age <= minAge[1])
        .filter((item) => Sex.includes(item.sex))
        .map((item) => 
      <Card className="card card-hover">
        <Link className="link-unstyled" to={"/profiles/" + item.id}>
              <div className="position-relative">
              <Card.Img className="card-photo" variant="top" src={item.image} />
              <img className="fav" src={fav} alt="" />
              </div>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.city + ", " + item.region}
              </Card.Text>
            </Card.Body>
            </Link>
          </Card>
      )}

        </Container>
      </Container>

 
    </div>
  );
};

export default Favourite;
