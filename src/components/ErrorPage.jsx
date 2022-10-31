import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <Fragment>
      <div className="container error-container">
        <NavLink className="error-link" to="/">
          Go back Home
        </NavLink>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
