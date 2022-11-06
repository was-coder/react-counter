import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Counter, ErrorPage, ErrorApp } from "../imports/Imports";

function RouteLink() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/error" element={<ErrorApp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default RouteLink;
