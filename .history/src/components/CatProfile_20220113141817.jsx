import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../cat2.jpg";

const CatProfile = () => {
  return (
    <Container>
      <div className="display-6">Profil kota</div>

      <Card className="card-profile">
        <Card.Title>Cześć, nazywam się Minerwa!</Card.Title>
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={catPhoto2} />
          <div className="button-group w-50">
            <Button className="m-1 w-50" variant="success">
              Success
            </Button>
            <Button className="m-1 w-50" variant="success">
              Success
            </Button>
          </div>
        </div>
        <div className="flex w-25 m-1">
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
        </div>
        <Card.Body>
          <div className="display-6">O mnie:</div>
          <div className="div">Wiek: 5 lat</div>
          <div className="div">Płeć: kotka</div>
          <div className="div">Kolor sierści: szary</div>
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

export default CatProfile;
