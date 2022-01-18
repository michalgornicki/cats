import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "../data";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <img className="user-photo-large" src={user.picture} alt={user.name} />
        <div className="text-center my-3 display-7">
          {user.name}
          </div>
          <div className="text-center my-3 display-7">
          {user.email}
          </div>

          <div className="text-center my-3 display-6">
          Ulubione koty
          </div>

          {data
          .filter((item) => Region.includes(item.region))
          .filter((item) => item.age > minAge[0] && item.age <= minAge[1])
          .filter((item) => Sex.includes(item.sex))
          .map((item) => (
            <Card className="card">
              <div className="position-relative">
              <Card.Img className="card-photo" variant="top" src={item.image} />
              <img className="fav" src={fav} alt="" />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.city + ", " + item.region}</Card.Text>
              </Card.Body>
            </Card>
          ))}

    </div>
  );
};

export default Dashboard;
