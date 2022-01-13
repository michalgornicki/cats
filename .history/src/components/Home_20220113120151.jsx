import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="display-6">Znajdź swojego towarzysza</div>
        <Container className="bg-green w-50 mx-0 my-4">
          <Form.Select className="m-1" aria-label="Default select example">
            <option>Mazowieckie</option>
            <option value="1">Podlaskie</option>
            <option value="2">Lubelskie</option>
            <option value="3">Małopolskie</option>
          </Form.Select>
          <Form.Select className="m-3" aria-label="Default select example">
            <option>0-2 lata</option>
            <option value="1">3-5 lat</option>
            <option value="2">6-10 lat</option>
            <option value="3">11+ lat</option>
          </Form.Select>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
