
import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import fav from "../heart.png";
import { Link } from "react-router-dom";


const Favourite = (data0) => {

  return (
    <div>
      <Container>
        <div className="display-6">
          Ulubione koty
        </div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap fading">

        </Container>
      </Container>

 
    </div>
  );
};

export default Favourite;