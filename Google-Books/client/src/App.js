import React from "react";
import Router from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
