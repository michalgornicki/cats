import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, HashRouter as Router, Routes, useParams } from "react-router-dom";


const Cat1 = (data0) => {

  const { user, isAuthenticated, isLoading } = useAuth0();


  const Copy = () => {
    window.navigator.clipboard.writeText("https://michalgornicki.github.io/cats/#/profiles/" + data0.data0[id - 1].id);
  }

  let { id } = useParams();


  return (
    <Container className="fading">
      <div className="display-6">Profil kota</div>

      <Card className="card-profile">
        <Card.Title className="display-6 mb-5">Cześć, nazywam się {data0.data0[id - 1].name}!</Card.Title>
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={data0.data0[id - 1].image} />
          <div className="buttons w-50 m-4">
          <Button className="m-1 w-50" variant="success">
              Telefon: {isAuthenticated? data0.data0[id - 1].phone : "***-***-***"}
            </Button>
            <Button className="m-1 w-50" variant="success">
            {isAuthenticated? "Dodaj do ulubionych ❤️" : "Zaloguj się by polubić ❤️"}	
            </Button>
            <Button className="m-1 w-50" variant="success" onClick={Copy}>
              Kopiuj link &#128236;
            </Button>
          </div>
        </div>
        <div className="flex w-25 m-1">
          <Card.Img className="card-profile-photo-sm" variant="top" src={data0.data0[id - 1].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data0.data0[id - 1].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data0.data0[id - 1].image} />
        </div>
        <Card.Body>
          <div className="display-6 my-3">O mnie:</div>
          <div className="div">Wiek: {data0.data0[id - 1].age} lat</div>
          <div className="div">Płeć: {data0.data0[id - 1].sex}</div>
          <div className="div">Kolor sierści: {data0.data0[id - 1].color}</div>
          <div className="display-6 my-3">Moja historia:</div>
          <div className="div">
            {data0.data0[id - 1]}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cat1;
