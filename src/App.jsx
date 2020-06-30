import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}
export default App;
