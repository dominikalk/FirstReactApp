import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>React Web App</h1>
      <p>
        I took a course on Pluralsight and learnt about React, Flux, and React
        Router for ultra responsive web apps.
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
