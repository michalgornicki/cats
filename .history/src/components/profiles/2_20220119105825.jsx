import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from "../../data";


const Cat2 = () => {
  return (
    <Container>
      <div className="display-6">Profil kota</div>

      <Card className="card-profile">
        <Card.Title>Cześć, nazywam się {data[1].name}!</Card.Title>
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={data[0].image} />
          <div className="buttons w-50 m-4">
            <Button className="m-1 w-50" variant="success">
              Dodaj do ulubionych 	&#10084;	
            </Button>
            <Button className="m-1 w-50" variant="success">
              Zapytaj o mnie &#9993;
            </Button>
          </div>
        </div>
        <div className="flex w-25 m-1">
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[1].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[1].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[1].image} />
        </div>
        <Card.Body>
          <div className="display-6">O mnie:</div>
          <div className="div">Wiek: {data[1].age} lat</div>
          <div className="div">Płeć: {data[1].sex}</div>
          <div className="div">Kolor sierści: {data[1].color}</div>
          <div className="display-6">Moja historia:</div>
          <div className="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cat2;