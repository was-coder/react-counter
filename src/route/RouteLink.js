import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter";
import ErrorPage from "../components/ErrorPage";

function RouteLink() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default RouteLink;
