import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import catPhoto2 from "../cat2.jpg";
import { Link } from "react-router-dom";



const CatProfile = () => {
    return (
        <Container>
        <div className="display-6">Profil kota</div>

        <Card className="card-profile">
        <Link className="card-profile-photo" to="/CatProfile">
        <Card.Title>Cześć, nazywam się Minerwa!</Card.Title>
            <Card.Img className="" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Link>
          </Card>
        </Container>
    );
  }
  
  export default CatProfile;