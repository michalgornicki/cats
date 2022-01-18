import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import catHome from "../catHome.png";
import data from "../data";

const Home = () => {
  const [Region, setRegion] = useState(["Mazowieckie", "Podlaskie", "Lubelskie", "Pomorskie", "Małopolskie", "Łódzkie"]);
  const [Sex, setSex] = useState(["kotek", "kotka"]);
  const [minAge, setMinAge] = useState([0, 50]);

  console.log(Region);
  console.log(minAge);

  const regionCheck = (e) => {
    setRegion(e.target.value);
  };

  const sexCheck = (e) => {
    setSex(e.target.value);
  };

  const setAge = () => {
    const form2 = document.getElementById("form2");
    console.log(minAge);
    console.log(form2.value);
    if (form2.value == 1) {
      setMinAge([0, 25]);
    } else if (form2.value == 2) {
      setMinAge([0, 2]);
    } else if (form2.value == 3) {
      setMinAge([3, 5]);
    } else if (form2.value == 4) {
      setMinAge([6, 10]);
    } else if (form2.value === 5) {
      setMinAge([11, 50]);
    }
  };

  return (
    <div>
      <Container>
        <div className="display-6">Znajdź swojego towarzysza</div>
        <Container className="bg-green w-75 mx-0 my-4 p-3 position-relative">
          <Container className="w-75 m-0">
            <Form.Select id="form1" className="my-3 w-100" aria-label="Default select example" onChange={regionCheck}>
              <option value="Polska">Polska</option>
              <option value="Mazowieckie">Mazowieckie</option>
              <option value="Lubelskie">Lubelskie</option>
              <option value="Małopolskie">Małopolskie</option>
              <option value="Pomorskie">Pomorskie</option>
              <option value="Łódzkie">Łódzkie</option>
            </Form.Select>
            <div className="d-flex justify-content-between">
              <Form.Select onChange={setAge} id="form2" aria-label="Default select example">
                <option value="1">W każdym wieku</option>
                <option value="2">0-2 lata</option>
                <option value="3">3-5 lat</option>
                <option value="4">6-10 lat</option>
                <option value="5">11+ lat</option>
              </Form.Select>
              <Form.Select className="" aria-label="Default select example">
                <option>kotka</option>
                <option value="1">kotek</option>
              </Form.Select>
            </div>

            <button type="button" class="btn bg-success text-white w-100 my-3">
              ZNAJDŹ
            </button>
          </Container>
          <Container>
            <img className="cat-background" alt="" src={catHome} />
          </Container>
        </Container>
      </Container>

      <Container>
        <div className="display-6">Losowe kociaki z naszej bazy</div>
        <Container className="w-75  my-4 mx-0 d-flex flex-wrap">
          {data.map((item) => (
            <Card className="card">
              <Link className="link-unstyled" to="/CatProfile">
                <Card.Img className="card-photo" variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.city + ", " + item.region}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default Home;
