import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from "./components/Login.jsx"


const Navigation = () => {
    return (
<div>

<Container>
<div className="website-name display-6 py-4 text-green text-rancho">AdoptujKota.pl</div>
</Container>

<Navbar className="bg-green mb-4">
    <Container className="d-flex justify-content-between">
    <Nav className="w-50 d-flex justify-content-between">
      <Nav.Link><Link className="link-unstyled text-white" to="/">Znajdź kota</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white" to="/Database">Przeglądaj bazę</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
    </Nav>
    <Nav className="">
    import Navigation from "./components/Navigation.jsx"

    </Nav>
    </Container>
  </Navbar>

    

</div>
    );
  }
  
  export default Navigation;