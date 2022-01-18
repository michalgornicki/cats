
import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data";

const Database = () => {

  const [Region, setRegion] = useState([]);


  return (
    <div>
      <Container>
        <div className="display-6">
          Znaleźliśmy ... kotów w Twojej lokalizacji
        </div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap">

        {data
        .filter((item) => item.region.includes("Łódzkie"))
        .map((item) => 
      <Card className="card">
      <Card.Img className="card-photo" variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.city + ", " + item.region}
              </Card.Text>
            </Card.Body>
          </Card>
      )}

        </Container>
      </Container>

      <Container className="checkboxes">
        <form className="d-flex flex-column m-3">
            <div className="div">Lokalizacja</div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Mazowieckie</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Podlaskie</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Lubelskie</label>
          </div>
        </form>

        <form className="d-flex flex-column m-3">
            <div className="div">Wiek</div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">0-2 lata</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">3-5 lat</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">6-10 lat</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">11+ lat</label>
          </div>
        </form>

        <form className="d-flex flex-column m-3">
            <div className="div">Płeć</div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Kot</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Kotka</label>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Database;
