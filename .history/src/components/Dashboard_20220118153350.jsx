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
        <div className="text-center my-3 display-6">
          {user.name}
          </div>
          <div>
          {user.email}
          </div>
    </div>
  );
};

export default Dashboard;
