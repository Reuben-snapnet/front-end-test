import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Event from "./components/Event";
import EventLists from "./components/EventLists";

function App() {
  return (
    <Router>
      <Route exact path='/' component={EventLists} />
      <Route path='/:id' component={Event} />
    </Router>
  );
}

export default App;
