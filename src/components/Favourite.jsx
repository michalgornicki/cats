
import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data";
import fav from "../heart.png";
import { Link } from "react-router-dom";


const Favourite = () => {

  console.log(Favs)


  return (
    <div>
      <Container>
        <div className="display-6">
          Ulubione koty
        </div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap fading">

        {data
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
