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
        <p className="home-p">
          This is a counter application that lets you count numbers from any
          value you want. It allows you to{" "}
          <span className="home-span">Set a count</span>,{" "}
          <span className="home-span">Increase</span> and also{" "}
          <span className="home-span">Decrease</span> a count with options for
          increasing or decreasing by a value that are more than 1.
        </p>
        <NavLink to="/counter" className="btn home-btn">
          Let's Count
        </NavLink>
      </div>
    </>
  );
}

export default Home;
