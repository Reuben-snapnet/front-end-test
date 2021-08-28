import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios.get(
        "http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
      );
      setEvents(res.data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // Get current events
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentEvents = events.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <EventContext.Provider
      value={[currentEvents, loading, postsPerPage, paginate, setCurrentPage]}
    >
      {props.children}
    </EventContext.Provider>
  );
};
