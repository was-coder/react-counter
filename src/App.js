import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import RouteLink from "./route/RouteLink";

function App() {
  return (
    <ErrorBoundary>
      <>
        <RouteLink />
      </>
    </ErrorBoundary>
  );
}

export default App;
