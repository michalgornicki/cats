import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import catPhoto from "../cat1.png";
import catPhoto2 from "../cat1.png";
import catPhoto3 from "../cat1.png";
import catPhoto2 from "../cat1.png";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="display-6">Znajdź swojego towarzysza</div>
        <Container className="bg-green w-75 mx-0 my-4 p-3 position-relative">
          <Container className="w-75 m-0">
            <Form.Select
              className="my-3 w-100"
              aria-label="Default select example"
            >
              <option>Mazowieckie</option>
              <option value="1">Podlaskie</option>
              <option value="2">Lubelskie</option>
              <option value="3">Małopolskie</option>
            </Form.Select>
            <div className="d-flex justify-content-between">
              <Form.Select className="" aria-label="Default select example">
                <option>0-2 lata</option>
                <option value="1">3-5 lat</option>
                <option value="2">6-10 lat</option>
                <option value="3">11+ lat</option>
              </Form.Select>
              <Form.Select className="" aria-label="Default select example">
                <option>kotka</option>
                <option value="1">kot</option>
              </Form.Select>
            </div>
            <button
              type="button"
              class="btn bg-bright-green text-white w-100 my-3"
            >
              ZNAJDŹ
            </button>
          </Container>
          <Container><img className="cat-background" alt="" src={catPhoto}/></Container>
        </Container>
      </Container>

      <Container>
        <div className="display-6">Losowe kociaki z naszej bazy</div>
        <Container className="w-50">
            <Container>
            <img className="" alt="" src={catPhoto}/>
            </Container>

        </Container>
      </Container>
    </div>
  );
};

export default Home;
