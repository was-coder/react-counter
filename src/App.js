import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NavBar } from "./imports/Imports";
import ErrorFallback from "./components/ErrorApp";

import RouteLink from "./route/RouteLink";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NavBar />
        <RouteLink />
      </ErrorBoundary>
    </>
  );
}

export default App;
