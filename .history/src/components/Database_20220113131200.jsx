import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import catPhoto from "../cat1.png";
import catPhoto2 from "../cat2.jpg";
import catPhoto3 from "../cat3.jpg";
import catPhoto4 from "../cat4.jpg";

const Database = () => {
  return (
    <div>
      <Container>
        <div className="display-6">
          Znaleźliśmy ... kotów w Twojej lokalizacji
        </div>
        <Container className="w-75 my-4 mx-auto d-flex flex-wrap">
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>Kraków, Małopolskie</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

      <Container className="">
        <form className="d-flex flex-column">
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
          </div>
          <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Database;
