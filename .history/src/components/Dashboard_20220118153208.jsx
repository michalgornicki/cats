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
      <div>
          {user.given_name + " " + user.family_name}
          </div>
    </div>
  );
};

export default Dashboard;
