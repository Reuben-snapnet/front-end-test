import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import { EventProvider } from "./Components/EventProvider";
import EventDetail from "./Components/EventDetail";

function App() {
  return (
    <EventProvider className="App">
      <Navbar />
      <Switch>
        <Route path="/event" exact component={Events} />
        <Route path="/event/:eventName" component={EventDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </EventProvider>
  );
}

export default App;
