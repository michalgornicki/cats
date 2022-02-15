import React from "react";
import Container from "react-bootstrap/Container";

const Favourite = (props) => {
  return (
    <div>
      <Container>
        <div className="display-6">Ulubione koty</div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap fading"></Container>
      </Container>
    </div>
  );
};

export default Favourite;
