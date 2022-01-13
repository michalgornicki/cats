import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import catPhoto2 from "../cat2.jpg";
import { Link } from "react-router-dom";



const CatProfile = () => {
    return (
        <Container>
        <div className="display-6">Profil kota</div>

        <Card className="card-profile">
        <Card.Title>Cześć, nazywam się Minerwa!</Card.Title>
            <Card.Img className="card-profile-photo" variant="top" src={catPhoto2} />
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

            </Card.Body>
          </Card>
        </Container>
    );
  }
  
  export default CatProfile;