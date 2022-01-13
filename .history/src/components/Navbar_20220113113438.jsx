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
      <Nav.Link>Przeglądaj bazę</Nav.Link>
      <Nav.Link>Stwórz ogłoszenie</Nav.Link>
    </Nav>
    <Nav className="">
      <Nav.Link href="#home">Stwórz konto</Nav.Link>
      <Nav.Link href="#features">Zaloguj się</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    
      <Link to="/">strona główna</Link>
      <Link to="/Database">baza danych</Link>
      <Link to="/Create">stwórz nowe ogłoszenie</Link>

</div>
    );
  }
  
  export default Database;