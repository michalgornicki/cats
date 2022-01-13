import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const Home = () => {
    return (
<div>
    <Container>
    <div className="display-6">Znajdź swojego towarzysza</div>
    <Container className="bg-green w-50 mx-0 my-4">
    <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
    </Container>
    </Container>
</div>
    );
  }
  
  export default Home;