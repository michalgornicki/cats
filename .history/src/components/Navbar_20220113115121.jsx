import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Database = () => {
    return (
<div>

<Container>
<div className="website-name display-6 py-4 text-green text-rancho">AdoptujKota.pl</div>
</Container>

<Navbar className="bg-green">
    <Container className="d-flex justify-content-between">
    <Nav className="w-50 d-flex ">
      <Nav.Link><Link className="link-unstyled text-white" to="/">Znajdź kota</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white" to="/Database">Przeglądaj bazę</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
    </Nav>
    <Nav className="">
      <Nav.Link><Link className="link-unstyled text-white" to="/Create">Zarejestruj konto</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white" to="/Create">Zaloguj się</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    

</div>
    );
  }
  
  export default Database;