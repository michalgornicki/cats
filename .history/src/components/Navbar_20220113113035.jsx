import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Database = () => {
    return (
<div>


<Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Znajdź kota</Nav.Link>
      <Nav.Link href="#features">Przeglądaj bazę</Nav.Link>
      <Nav.Link href="#pricing">Stwórz ogłoszenie</Nav.Link>
    </Nav>
    <Nav className="me-auto">
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