import Container from 'react-bootstrap/Container'

const CatProfile = () => {
    return (
        <Container>
        <div className="display-6">Profil kota</div>

        <Card className="card">
        <Link className="link-unstyled" to="/CatProfile">
            <Card.Img className="card-photo" variant="top" src={catPhoto2} />
            <Card.Body>
              <Card.Title>Minerwa, kotka</Card.Title>
              <Card.Text>
                Kraków, Małopolskie
              </Card.Text>
            </Card.Body>
          </Link>
          </Card>
        </Container>
    );
  }
  
  export default CatProfile;