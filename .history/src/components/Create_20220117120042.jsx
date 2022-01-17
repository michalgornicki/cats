import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../photos/cat2.jpg";

const Create = () => {
  return (
    <Container>
      <div className="display-6">Stwórz nowe ogłoszenie</div>

      <Card className="card-profile">
        <label for="fname">Imię kota</label>
        <input className="my-3" type="text" id="fname" name="firstname" placeholder="Wpisz imię kota.."/>
        <div className="d-flex flex-row align-bottom">
          <Card.Img className="card-profile-photo" variant="top" src={catPhoto2} />
          <div className="buttons w-50 m-4"></div>
        </div>
        <div className="flex w-25 m-1">
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
          <Card.Img className="card-profile-photo-sm" variant="top" src={catPhoto2} />
        </div>
        <Card.Body>
          <form className="d-flex flex-column w-50" action="/action_page.php">
            
            <label for="age">Wiek</label>
            <select id="age" name="age">
              <option value="australia">0-2 lata</option>
              <option value="canada">3-5 lat</option>
              <option value="usa">6-10 lat</option>
              <option value="usa">11+ lat</option>
            </select>

            <label for="sex">Płeć</label>
            <select id="sex" name="sex">
              <option value="australia">Kot</option>
              <option value="canada">Kotka</option>
            </select>
            <label for="color">Kolor sierści</label>
            <select id="color" name="color">
              <option value="australia">Szary</option>
              <option value="canada">Czarny</option>
              <option value="usa">Biały</option>
              <option value="usa">Rudy</option>
              <option value="usa">Wielokolorowy</option>
            </select>
          </form>

        <div className="d-flex flex-column">
        <label for="fname">Stwórz krótki opis kota</label>
        <input className="w-75 p-5" type="text" id="fname" name="firstname" placeholder="Napisz historię kota.."/>
        </div>
        </Card.Body>
        <Button className="my-3 w-50" variant="success">
            Zatwierdź
          </Button>
      </Card>
    </Container>
  );
};

export default Create;
