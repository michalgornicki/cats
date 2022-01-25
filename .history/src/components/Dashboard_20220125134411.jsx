import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


const Dashboard = (data0) => {
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

          {data0.data0
          f
          .map((item) => (
            <Card className="card card-hover">
              <div className="position-relative">
                <Link className="link-unstyled" to={"/profiles/" + item.id}>
              <Card.Img className="card-photo" variant="top" src={item.image} />
              </Link>
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
