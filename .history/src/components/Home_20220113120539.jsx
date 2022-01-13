import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="display-6">Znajdź swojego towarzysza</div>
        <Container className="bg-green w-50 mx-0 my-4 p-3">
          <Form.Select className="my-3 w-100" aria-label="Default select example">
            <option>Mazowieckie</option>
            <option value="1">Podlaskie</option>
            <option value="2">Lubelskie</option>
            <option value="3">Małopolskie</option>
          </Form.Select>
          <div className="d-flex justify-content-between">
          <Form.Select className="m-3" aria-label="Default select example">
            <option>0-2 lata</option>
            <option value="1">3-5 lat</option>
            <option value="2">6-10 lat</option>
            <option value="3">11+ lat</option>
          </Form.Select>
          <Form.Select className="m-3" aria-label="Default select example">
            <option>0-2 lata</option>
            <option value="1">3-5 lat</option>
            <option value="2">6-10 lat</option>
            <option value="3">11+ lat</option>
          </Form.Select>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
