import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Database = () => {
    return (
<div>




    
      <Link to="/">strona główna</Link>
      <Link to="/Database">baza danych</Link>
      <Link to="/Create">stwórz nowe ogłoszenie</Link>

</div>
    );
  }
  
  export default Database;