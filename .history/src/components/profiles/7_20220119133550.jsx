import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from "../../data";


const Cat7 = () => {

  const Copy = () => {
    window.navigator.clipboard.writeText("https://michalgornicki.github.io/cats/#/profiles/" + data[6].id);
  }

  return (
    <Container className="fading">
      <div className="display-6">Profil kota</div>

      <Card className="card-profile">
        <Card.Title className="display-6 mb-5">Cześć, nazywam się {data[6].name}!</Card.Title>
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={data[6].image} />
          <div className="buttons w-50 m-4">
          <Button className="m-1 w-50" variant="success">
              Telefon: {isAuthenticated? data[6].phone : "***-***-***"}
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
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[6].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[6].image} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={data[6].image} />
        </div>
        <Card.Body>
          <div className="display-6 my-3">O mnie:</div>
          <div className="div">Wiek: {data[6].age} lat</div>
          <div className="div">Płeć: {data[6].sex}</div>
          <div className="div">Kolor sierści: {data[6].color}</div>
          <div className="display-6 my-3">Moja historia:</div>
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

export default Cat7;
