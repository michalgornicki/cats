import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import catPhoto from "../cat1.png";
import catPhoto2 from "../cat2.jpg";
import catPhoto3 from "../cat3.jpg";
import catPhoto4 from "../cat4.jpg";

const Database = () => {
    return (
        <Container>
        <div className="display-6">Losowe kociaki z naszej bazy</div>
        <Container className="w-75 my-4 mx-0 d-flex flex-wrap">
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
            <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
            <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
            <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
            <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
            <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
  
  export default Database;