import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Database = () => {
    return (
<div>


<Navbar bg="dark" variant="dark">
    <Container className="d-flex justify-content-between">
    <Nav className="">
      <Nav.Link><Link to="/">Znajdź kota</Link></Nav.Link>
      <Nav.Link> <Link to="/Database">Przeglądaj bazę</Link></Nav.Link>
      <Nav.Link><Link to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
    </Nav>
    <Nav className="">
      <Nav.Link href="#home">Stwórz konto</Nav.Link>
      <Nav.Link href="#features">Zaloguj się</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    
      stwórz nowe ogłoszenie

</div>
    );
  }
  
  export default Database;