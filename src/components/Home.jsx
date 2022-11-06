import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the homepage of the counter applicstion"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container">
        <h1 className="home-h1">
          We <span>COUNT</span> on you to guide us
        </h1>
        <NavLink to="/counter" className="btn home-btn">
          Let's Count
        </NavLink>
      </div>
    </>
  );
}

export default Home;
