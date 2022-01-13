import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Database = () => {
    return (
<div>


<Navbar bg="black">
    <Container className="d-flex justify-content-between">
    <Nav className="">
      <Nav.Link><Link className="link-unstyled text-white" to="/">Znajdź kota</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled" to="/Database">Przeglądaj bazę</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
    </Nav>
    <Nav className="">
      <Nav.Link>Stwórz konto</Nav.Link>
      <Nav.Link>Zaloguj się</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    

</div>
    );
  }
  
  export default Database;