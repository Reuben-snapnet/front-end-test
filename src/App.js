import "bulma/css/bulma.min.css";
import "./App.css";
import axios from "axios";
import Event from "./components/Event";
import { useState, useEffect } from "react";
import Pagination from "react-router-pagination";

function App() {
  const [events, setEvents] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
      )
      .then((res) => {
        setEvents(res.data);
      });
  }, [events, setEvents]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="App">
      <div className="container has-text-centered m-6">
        <h1 className="title">
          <a className="pages" href="/">
            Events
          </a>{" "}
          | <a href="/about">About</a>
        </h1>
        <div className="events">
          {events.map((item) => (
            <Event
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              date={item.date}
              description={item.description}
              location={item.location}
              time={item.time}
              petsAllowed={item.petsAllowed}
              organizer={item.organizer}
            />
          ))}
        </div>
      </div>

      <div className="pages">
        <Pagination
          totalPages={3}
          pageNumber={activePage}
          itemsCountPerPage={2}
          totalItemsCount={events.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
