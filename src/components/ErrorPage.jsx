import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="This shows the error page of the counter application"
        />
      </Helmet>
      <div className="container error-container">
        <NavLink className="error-link" to="/">
          Go back Home
        </NavLink>
      </div>
    </>
  );
}

export default ErrorPage;
