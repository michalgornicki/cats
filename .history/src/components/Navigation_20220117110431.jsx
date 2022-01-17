import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from "./Login.jsx"
import { useAuth0 } from "@auth0/auth0-react";



const Navigation = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();


    return (
<div>

<Container>
<div className="website-name display-6 py-4 text-green text-rancho">AdoptujKota.pl</div>
</Container>

<Navbar className="bg-green mb-4">
    <Container className="d-flex justify-content-between">
    <Nav className="w-50">
      <Nav.Link><Link className="link-unstyled text-white mx-3" to="/">Znajdź kota</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white mx-3" to="/Database">Przeglądaj bazę</Link></Nav.Link>
      {isAuthenticated ?
      <div className="d-flex flex-row">
      <Nav.Link><Link className="link-unstyled text-white mx-3" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white mx-3" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
      <Nav.Link><Link className="link-unstyled text-white mx-3" to="/Create">Stwórz ogłoszenie</Link></Nav.Link>
      </div>
      : ""}
    </Nav>
    <Nav className="">
      <Login />

    </Nav>
    </Container>
  </Navbar>

    

</div>
    );
  }
  
  export default Navigation;