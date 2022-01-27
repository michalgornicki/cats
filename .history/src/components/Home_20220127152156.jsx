import React, { useState, useEffect } from "react";
import Firebase from "firebase";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import catHome from "../catHome.png";
import fav from "../heart.png";


const Home = (data0) => {

  const regions = [
    "Polska",
    "Dolnośląskie",
    "Kujawsko-pomorskie",
    "Lubelskie",
    "Lubuskie",
    "Łódzkie",
    "Małopolskie",
    "Mazowieckie",
    "Opolskie",
    "Podkarpackie",
    "Podlaskie",
    "Pomorskie",
    "Śląskie",
    "Świętokrzyskie",
    "Warmińsko-mazurskie",
    "Wielkopolskie",
    "Zachodniopomorskie",
  ];

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [Region, setRegion] = useState( regions );
  const [Sex, setSex] = useState(["kotek", "kotka"]);
  const [minAge, setMinAge] = useState([0, 50]);
 
  const[Favs, setFavs] = useState([]);

  const regionCheck = (e) => {
    if (e.target.value === "Polska") {setRegion( regions );}
    else {setRegion(e.target.value);}
  };


  const toggleAge = () => {
    const form2 = document.getElementById("form2");
    if (form2.value === "1") {
      setMinAge([0, 25]);
    } else if (form2.value === "2") {
      setMinAge([0, 2]);
    } else if (form2.value === "3") {
      setMinAge([3, 5]);
    } else if (form2.value === "4") {
      setMinAge([6, 10]);
    } else if (form2.value === "5") {
      setMinAge([11, 50]);
    }
  };

  const toggleSex = () => {
    const form3 = document.getElementById("form3");
    if (form3.value === "1") {
      setSex(["kotek", "kotka"]);
    } else if (form3.value === "2") {
      setSex(["kotka"]);
    } else if (form3.value === "3") {
      setSex(["kotek"]);
    }
  };

  const Find = () => {
    const catbox1 = document.getElementById("cat-box1");
    const catbox2 = document.getElementById("cat-box2");
    const catboxName = document.getElementById("cat-box-name");

    catbox1.style.display = "none";
    catbox2.style.display = "block";
    catboxName.innerHTML = "Znalezione koty:";
  };


  const [data1, setData1] = useState([]);
  const [usernum, setUsernum] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    let ref = Firebase.database().ref("/users");
    ref.on("value", (snapshot) => {
      const stateSnapshot = snapshot.val();
      setData1(stateSnapshot);
      setUsernum(stateSnapshot.length);
    });
  };

  console.log(data1);
  console.log(usernum);

  const writeData = () => {
    if (data1.filter(e => e.user === user.name).length < 1) {
      Firebase.database()
        .ref("/users")
        .child(usernum)
        .set({
          id: usernum + 1,
          user: user.name,
          favourites: setFavs([favs... + ),
        });
    }
    else if (user) {
      Firebase.database()
        .ref("/users")
        .child(usernum)
        .set({
          favourites: data0.data0,
        });
    }
  };

  return (
    <div>
        <div  className="display-6 w-75 m-auto">Znajdź swojego towarzysza</div>

      <Container>
        <Container className="search-box bg-green mx-0 my-4 p-3 position-relative">
          <Container className="w-lg-75 w-sm-100 m-0">
            <Form.Select id="form1" className="my-3 w-100" aria-label="Default select example" onChange={regionCheck}>
              {regions.map((item =>
              <option value={item}>{item}</option>
              ))}
            </Form.Select>
            <div className="d-flex justify-content-between">
              <Form.Select onChange={toggleAge} id="form2" aria-label="Default select example">
                <option value="1">W każdym wieku</option>
                <option value="2">0-2 lata</option>
                <option value="3">3-5 lat</option>
                <option value="4">6-10 lat</option>
                <option value="5">11+ lat</option>
              </Form.Select>
              <Form.Select onChange={toggleSex} id="form3" className="" aria-label="Default select example">
                <option value="1">Obie płcie</option>
                <option value="2">kotka</option>
                <option value="3">kotek</option>
              </Form.Select>
            </div>

            <button onClick={Find} type="button" className="btn bg-green-button text-white w-100 my-3">
              ZNAJDŹ
            </button>
          </Container>
          <Container>
            <img className="cat-background" alt="" src={catHome} />
          </Container>
        </Container>
      </Container>



        <div id="cat-box1">

        <div id="cat-box-name" className="display-6 w-75 m-auto">
        Ostatnio dodane
      </div>
        <Container className="w-75 mx-5 my-4 d-flex flex-wrap fading">
          {data0.data0
          
          .map((item) => (
            <Card className="card card-hover">
              <div className="position-relative">
              <Link className="link-unstyled" to={"/profiles/" + item.id}>
              
              <Card.Img className="card-photo" variant="top" src={item.image} />
              </Link>
              <img className="fav" onClick={writeData} src={fav} alt="" />
              </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.city + ", " + item.region}</Card.Text>
                  <Card.Text className="text-secondary">dodane: {item.created}</Card.Text>
                  <Card.Text className="text-secondary">dodane przez: {item.user}</Card.Text>
                </Card.Body>
              
            </Card>
          )
          ).reverse()}
        </Container>
        </div>

      <div id="cat-box2">
      <Container className="w-75 mx-5 my-4 d-flex flex-wrap fading">
        {data0.data0
          .filter((item) => Region.includes(item.region))
          .filter((item) => item.age > minAge[0] && item.age <= minAge[1])
          .filter((item) => Sex.includes(item.sex))
          .map((item) => (
            <Card className="card card-hover">
              <div className="position-relative">
                <Link className="link-unstyled" to={"/profiles/" + item.id}>
              <Card.Img className="card-photo" variant="top" src={item.image} />
              </Link>
              <img className="fav" src={fav} alt="" />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.city + ", " + item.region}</Card.Text>
                <Card.Text className="text-secondary">dodane: {item.created}</Card.Text>
                <Card.Text className="text-secondary">dodane przez: {item.user}</Card.Text>
              </Card.Body>
              
            </Card>
          )).reverse()}
      </Container>
      </div>
    </div>
  );
};

export default Home;
