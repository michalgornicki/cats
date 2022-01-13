import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import catPhoto2 from "../cat2.jpg";

const Create = () => {
  return (
    <Container>
      <div className="display-6">Profil kota</div>

      <Card className="card-profile">
        <Card.Title>Wpisz imię kota</Card.Title>
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
          <form action="/action_page.php">
          <label for="country">Country</label>

          <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>


            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <input type="submit" value="Submit" />
          </form>
          <Button className="m-1 w-50" variant="success">
            Zatwierdź
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Create;
